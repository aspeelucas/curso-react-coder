import ItemCount from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../context/DarkModeContext";
export const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const onAdd = (cantidad) =>{
        console.log(cantidad)
    }        
    return (
    
        <div className={`row cardDetalles text-center  ${darkMode ?'verProduDark' : 'verProduWhite' }`}>
            <div className="col-md-4  d-flex justify-content-center align-items-center">
                <img src={`../img/${item.img}`} className="img-fluid rounded-start imgTamanoDetails" alt={`Imagen de ${item.imagen}`} />
            </div>
            <div className="col-md-8 p-0 d-flex justify-content-center align-items-center">
                <div className={`card-body  ${darkMode ? 'textoDarkMode' :'colorTextoDetalle'}`}>
                    <h5 className={`card-tittle ${darkMode ? 'textoDarkMode' :'colorTextoDetalle'}`}>{item.nombre}</h5>
                    <p className="card-text ">Modelo : {item.modelo}</p>
                    <p className="card-text">Marca : {item.marca}</p>
                    <p className="card-text">Precio $ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                    <p className="card-text">Stock : {item.stock}</p>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                    <ItemCount  valInicial={1} stock={item.stock} onAdd={onAdd}/>
                    <button className={`btn ${darkMode ? 'btn-secondary' : ' btn-light'}`}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


