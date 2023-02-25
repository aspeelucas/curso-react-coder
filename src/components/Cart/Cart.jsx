import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const Cart = () => {
    const carrito =
     [{id:1,nombre : "Arroz",modelo:"1",img:'iphone12.png',precio:400, cantidad:5},
     {id:2,nombre : "Fideos",modelo:"2",img:'iphone12.png',precio:300, cantidad:2},
     {id:3,nombre : "Manteca",modelo:"3",img:'iphone12.png',precio:500, cantidad:3},
    ]


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
                    <p className="text-center mt-3">Resumen de la compra : precio total</p>
                    <button className="btn btn-danger">Vaciar Carrito</button>
                    <Link className="nav-link" to={'/'} ><button className="btn btn-dark">Continuar comprando</button></Link>
                    <Link className="nav-link" to={'/checkout'} ><button className="btn btn-dark">Finalizar compra</button></Link>
                    
                </div>
                </div>

             </>
            
            }

        </>

  )


}


