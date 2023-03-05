import ItemCount from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";
import { HeaderDetails } from "../HeaderImg/HeaderDetails";
export const ItemDetail = ({ item }) => {
  const { darkMode } = useDarkModeContext();
  const { addItem } = useCarritoContext();

  const onAdd = (cantidad) => {
    addItem(item, cantidad);
  };
  return (
    <>
        <div className="contenedorBannerPadre bg-white">
            <img
                src={item.banner}
                className="img-fluid  bannerDetails"
                alt={`Imagen de ${item.banner}`}
              />
        </div>
      <HeaderDetails />
      <div
        className={`row cardDetalles text-center  ${
          darkMode ? "verProduDark" : "verProduWhite"
        }`}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark anchoCarouselDetails"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={item.img}
                className="img-fluid rounded-start imgTamanoDetails"
                alt={`Imagen de ${item.imagen}`}
              />
            </div>
            <div className="carousel-item">
            <img
                src={item.imgdos}
                className="img-fluid rounded-start imgTamanoDetails"
                alt={`Imagen de ${item.imagen}`}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div className="col-md-4  d-flex justify-content-center align-items-center">
                <img src= {item.img} className="img-fluid rounded-start imgTamanoDetails" alt={`Imagen de ${item.imagen}`} />
            </div> */}
        <div className="col-md-8 p-0 d-flex justify-content-center align-items-center">
          <div
            className={`card-body  ${
              darkMode ? "textoDarkMode" : "colorTextoDetalle"
            }`}
          >
            <h5
              className={`card-tittle ${
                darkMode
                  ? "textoDarkMode textoH5DetailsDark"
                  : "colorTextoDetalle textoH5DetailsWhite"
              }`}
            >
              {item.nombre}
            </h5>
            <p className="card-text textDetailsFont ">Modelo : {item.modelo}</p>
            <p className="card-text textDetailsFont">Marca : {item.marca}</p>
            <p className="card-text textDetailsFont">
              Precio $ {new Intl.NumberFormat("de-DE").format(item.precio)}
            </p>
            <p className="card-text textDetailsFont">Stock : {item.stock}</p>
            <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
              <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
