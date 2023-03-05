import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footerr">
            <div className="footerInfo">
                <div className="footerInfoBox">
                <Link className="nav-link" to={'/'} ><p className="textFooter">Home</p></Link>
                <Link className="nav-link" to={'/contacto'} ><p className="textFooter">Contacto</p></Link>
                <Link className="nav-link" to={'/cart'} ><p className="textFooter">Carrito</p></Link>
                </div>
                <div className="footerInfoBoxRedes">
                <h3>Nuestras Redes </h3>
                </div>
            </div>
        </div>
    );
}


