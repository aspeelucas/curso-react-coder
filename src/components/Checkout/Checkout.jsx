import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import  React  from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getProducto ,updateProducto} from "../../firebase/firebase";


export const Checkout = () => {

    const datosForm = React.useRef()
    let navigate = useNavigate()

    const consultarForm = (e) =>{
        e.preventDefault()
        const datForm = new FormData(datosForm.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD =>{
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id,prodBDD)
            })
        })


        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(orCompra =>{
            
            toast.success(`Gracias por tu Compra, su orden ${orCompra.id} por un monto de $ ${new Intl.NumberFormat('de-De').format(totalPrice())} fue exitosa`)
            emptyCart(0)
            e.target.reset()
            navigate("/")

        })

    }
   
    const {carrito,emptyCart,totalPrice} = useCarritoContext()

  return (
    <>
        {carrito.length === 0 ?
        <>
        <h2>No existen productos en el carrito </h2>
           <Link className="nav-link" to={'/'}> <button className="btn btn-dark"> Continuar Comprando</button>  </Link> 
        </>
        :

        <div className="container  formularioCompra">
            <div className="text-center">
              <h5 className="tituloFormCompras">Formulario de compra</h5>
            </div>
          <form onSubmit={consultarForm} className="textoFormulario" ref={datosForm}>
          <div className="mb-3 ">
            <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
            </label>
            <input type="text" className="form-control " name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
         <div className="mb-3">
          <label htmlFor="repeatEmail" className="form-label">
            Repetir Email
          </label>
          <input type="email" className="form-control" name="repeatEmail" />
          </div>
          <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Numero Telefonico
          </label>
          <input type="number" className="form-control" name="tel" />
         </div>
          <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
           Direccion
          </label>
          <input type="text" className="form-control" name="direccion" />
         </div>
         <div className="tarjetasCredito">
         <div className="mb-3">
          <label htmlFor="tarjeta" className="form-label">
           Tarjeta de Credito
          </label>
          <input type="number" className="form-control" name="tarjeta" />
         </div>
         <div className="mb-3">
          <label htmlFor="cvv" className="form-label">
           CVV
          </label>
          <input type="number" className="form-control" name="cvv" />
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
