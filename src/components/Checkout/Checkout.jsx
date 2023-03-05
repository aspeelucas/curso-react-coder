import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import  React  from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getProducto ,updateProducto} from "../../firebase/firebase";

import { useState } from "react";


export const Checkout = () => {

    let navigate = useNavigate()
    const {carrito,emptyCart,totalPrice} = useCarritoContext()

    // VALIDACION FORM
    const [errors, setErrors] = useState({
      nombre: false,
      email: false,
      repeatEmail: false,
      matchmail: false,
      tel: false,
    });

    const [formValues, setFormValues] = useState({
      nombre: '',
      email: '',
      repeatEmail: '',
      tel: '',
      direccion :'',
      cvv : '',
      tarjeta :"",
    })


    const controlInput = (e) => {
      switch (e.target.name) {
        case 'nombre':
          if (!/^[a-z ,.'-]+$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, nombre: true }));
          } else {
            setErrors((prev) => ({ ...prev, nombre: false }));
          }
          break;
        case 'email':
          if(formValues.email !== formValues.repeatEmail){
            setErrors((prev) => ({ ...prev, matchmail: true }))
          }else{
            setErrors((prev) => ({ ...prev, matchmail: false }))
          }
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, email: true }));
          } else {
            setErrors((prev) => ({ ...prev, email: false }));
          }
          break;
        case 'repeatEmail':
          if(formValues.email !== formValues.repeatEmail){
            setErrors((prev) => ({ ...prev, matchmail: true }))
          }else{
            setErrors((prev) => ({ ...prev, matchmail: false }))
          }
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, repeatEmail: true }));
          } else {
            setErrors((prev) => ({ ...prev, repeatEmail: false }));
          }
          break;
        case 'tel':
          if (!/^[0-9]+$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, tel: true }));
          } else {
            setErrors((prev) => ({ ...prev, tel: false }));
          }
          break;
          case 'direccion':
          if (!/^[a-zA-Z0-9 ]+$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, direccion: true }));
          } else {
            setErrors((prev) => ({ ...prev, direccion: false }));
          }
          break;
          case 'tarjeta':
          if (!/^[0-9]+$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, tarjeta: true }));
          } else {
            setErrors((prev) => ({ ...prev, tarjeta: false }));
          }
          break;
          case 'cvv':
          if (!/^[0-9]{3}$/i.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, cvv: true }));
          } else {
            setErrors((prev) => ({ ...prev, cvv: false }));
          }
          break;
        default:
          return;
      }
    };
    const handleInput = (e) => {
      setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
    }
    // VALIDACION FORM FIN

    const consultarForm = (e) =>{
        e.preventDefault()  
        for(let key in formValues){
          if(!formValues[key]){
            toast.error(`No pueden haber campos vacios`)
            return;
          }
        }
        for(let key in errors){
          if(errors[key]){
            toast.error(`Hay errores en el formulario`)
            return;
          }
        }

      // crea un auxiliar del cart q se va a enviar para crear la orden de compra en la base de datos
        const aux = [...carrito]
      // resta los productos de mi stock en la base de datos
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD =>{
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id,prodBDD)
                
            })
            delete prodCarrito.stock
            delete prodCarrito.banner
        })

        // crea la orden de compra en la base de datos, envia un mensaje al usuario avisando el id y el monto total
        createOrdenCompra(formValues, aux, totalPrice(), new Date().toISOString()).then(orCompra =>{
            
            toast.success(`Gracias por tu Compra, su orden ${orCompra.id} por un monto de $ ${new Intl.NumberFormat('de-De').format(totalPrice())} fue exitosa`)
            emptyCart(0) 
            e.target.reset()
            navigate("/")

        })

    }
   
  return (
    <>
        {carrito.length === 0 ?
        <>
        <div className="carritoEmpty">
        <img src="../img/carritoVacio.png" alt="carrito sin items" />
            <h2 className="whiteVacio">No es posible realizar el checkout</h2>
           <Link className="nav-link" to={'/'}> <button className="btn btn-dark"> Continuar Comprando</button>  </Link> 
        </div>
        </>

        :

        <div className="container  formularioCompra">
            <div className="text-center">
              <h5 className="tituloFormCompras">Formulario de compra</h5>
            </div>
          <form onSubmit={consultarForm} className="textoFormulario" >
          <div className="mb-3 ">
            <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
            </label>
            <input type="text" value={formValues.nombre} className="form-control " name="nombre" onChange={handleInput} onBlur={controlInput}/>
            {errors.nombre && <p className="text-danger">Ingrese un nombre y apellido válido</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Email
            </label>
            <input type="email" value={formValues.email} className="form-control" name="email" onChange={handleInput} onBlur={controlInput}/>
            {errors.email && (<p className="text-danger">Ingrese un email valido</p>)}
          </div>
         <div className="mb-3">
          <label htmlFor="repeatEmail" className="form-label">
            Repetir Email
          </label>
          <input type="email" value={formValues.repeatEmail} className="form-control" name="repeatEmail"  onChange={handleInput} onBlur={controlInput} />
          {errors.email && ( <p className="text-danger">Ingrese un email valido</p>)}
          {errors.matchmail && ( <p className="text-danger">los emails deben coincidir</p>)}
          </div>
          <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Numero Telefonico
          </label>
          <input type="text" value={formValues.tel}  className="form-control" onChange={handleInput} onBlur={controlInput} name="tel" />
          {errors.tel && ( <p className="text-danger">Ingresa un telefono valido</p>)}
         </div>
          <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
           Direccion
          </label>
          <input type="text" value={formValues.direccion} className="form-control" onChange={handleInput}  onBlur={controlInput} name="direccion" />
          {errors.direccion && ( <p className="text-danger">Ingresa un telefono valido</p>)}
         </div>
         <div className="tarjetasCredito">
         <div className="mb-3">
          <label htmlFor="tarjeta" className="form-label">
           Tarjeta de Credito
          </label>
          <input type="text" value={formValues.tarjeta} className="form-control" onChange={handleInput}  onBlur={controlInput} name="tarjeta" />
          {errors.tarjeta && ( <p className="text-danger">Ingresa un telefono valido</p>)}
         </div>
         <div className="mb-3">
          <label htmlFor="cvv" className="form-label">
           CVV
          </label>
          <input type="text" value={formValues.cvv} className="form-control" onChange={handleInput}  onBlur={controlInput} name="cvv" />
          {errors.cvv && ( <p className="text-danger">El cvv son 3 digitos</p>)}
         </div>
         </div>
         <div className="botonesTerminarCompra">
          <button type="submit" className="btn btn-success botonTerminarCompra">
          Finalizar Compra
        </button>
        <Link className="nav-link" to={'/'} ><button className="btn btn-primary botonTerminarCompra">Volver al Inicio</button></Link>
        </div>
      </form>
    </div>
    }

    </>  
  );
};

