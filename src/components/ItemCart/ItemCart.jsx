
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext";
export const ItemCart = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {removeItem}= useCarritoContext()
    return (
        <div className={`card mb-3 ${darkMode ? 'cardCartDark' : 'cardCart'} `}>
            <div className="row  g-0 tamnoInnerCart">
                <div className="col-md-4">
                   <img src={item.img} alt={`Imagen Producto ${item.nombre}`} className="img-fluid " /> 
                </div>
                <div className="col-md-8">
                    <div className="card.body text-center">
                        <h5 className={`card-title  ${darkMode?'tituloCarritoFinalizarDark' : 'tituloCarritoFinalizar'}`}>{item.nombre}</h5>
                        <p className={`card-text ${darkMode ? 'textDetailCartDark' : 'textDetailCart'}`}>Cantidad: {item.cant} </p>
                        <p className={`card-text ${darkMode ? 'textDetailCartDark' : 'textDetailCart'}`}>Precio Unitario: $ {new Intl.NumberFormat('de-De').format(item.precio)} </p>
                        <p className={`card-text ${darkMode ? 'textDetailCartDark' : 'textDetailCart'}`}>Subtotal:$ {new Intl.NumberFormat('de-De').format(item.precio * item.cant)} </p>
                        <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


