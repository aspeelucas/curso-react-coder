import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
   const {carrito,totalPrice,emptyCart} = useCarritoContext()


  return (
        <>

            {carrito.length=== 0 
            ? 
            <>
            <h2>Carrito vacio</h2>
           <Link className="nav-link" to={'/'}> <button className="btn btn-dark"> Continuar Comprando</button>  </Link> 
             </>
            : 

            <>
                <div className="conteiner cartContenedor">

                    <ItemList products={carrito} plantilla = {'itemCart'}/>

                <div className="divButtons">
                    <p className="text-center mt-3  resumenCompra">Resumen de la compra : $ {new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className="btn btn-danger textoBotones" onClick={()=> emptyCart()}>Vaciar Carrito</button>
                    <Link className="nav-link" to={'/'} ><button className="btn btn-dark textoBotones">Continuar comprando</button></Link>
                    <Link className="nav-link" to={'/checkout'} ><button className="btn btn-success textoBotones">Finalizar compra</button></Link>
                    
                </div>
                </div>

             </>
            
            }

        </>

  )


}


