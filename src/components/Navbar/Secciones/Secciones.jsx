import { Link } from "react-router-dom";
import React from "react";
const Secciones = React.memo(() => {
    return (
        <>
              <li className="nav-item">
                <Link className="nav-link" to={"/Contacto"}><button className="btn textoNav">Contacto</button></Link>
              </li>
        </>
    );
})

export default Secciones;
