import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
export const Item = ({ item }) => {
  const {darkMode} = useDarkModeContext()
  return (

    <div className= {`card text-center ${darkMode ?'darkModeCard' :'anchoCards'}`}>
      <img src={item.img} className="card-img-top tamanoImagensList" alt={`Imagen de ${item.nombre}`} />
      <div className={`card-body  ${darkMode ? 'textoCardsDark' : 'textoCards'}`}>
        <h5 className={`${darkMode ? 'tituloCardDark' : 'tituloCard'}`}>{item.nombre}</h5>
        <p className="card-text">{item.marca}</p>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
        <p className="card-text"></p>
        <button className={`btn botonCards mb-5 ${darkMode ? 'botonCardDarkMode ' : 'botonCards'} `}><Link className={`nav-link ${darkMode ? 'textoCardDarkMode' : 'textoBotonCard'} `} to={`/item/${item.id}`}>Ver Producto</Link></button>
      </div>
    </div>
  );
};
