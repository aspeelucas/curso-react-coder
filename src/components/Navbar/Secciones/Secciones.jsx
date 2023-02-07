import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
              <li className="nav-item">
                <Link className="nav-link" to={"/Contacto"}><button className="btn btn-light">Contacto</button></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/nosotros"}><button className="btn btn-light">Nosotros</button></Link>
              </li>
        </>
    );
}

export default Secciones;
