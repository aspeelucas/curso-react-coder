import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({item}) => {
    return (
        <div className="row cardDetalles text-center">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} className="img-fluid rounded-start imgTamanoDetails" alt={`Imagen de ${item.imagen}`} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-tittle">{item.nombre}</h5>
                    <p className="card-text">Modelo : {item.modelo}</p>
                    <p className="card-text">Marca : {item.marca}</p>
                    <p className="card-text">Precio $ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                    <p className="card-text">Stock : {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}


