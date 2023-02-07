export const Item = ({ item }) => {
  return (
    <div className="card text-center anchoCards " style={{ width: "20rem" }}>
      <img src={`../img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.marca}</p>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
        <p className="card-text"></p>
        <button className="btn btn-dark mb-5">Ver Producto</button>
      </div>
    </div>
  );
};
