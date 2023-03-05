import { Link } from "react-router-dom";
import {BsFacebook} from "react-icons/bs"
import {RiInstagramFill} from "react-icons/ri"
import {AiFillTwitterCircle} from "react-icons/ai"

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
                <h3 className="h3Redes">Nuestras Redes </h3>
                <div className="boxRedesSociales">
                <BsFacebook/>
                <RiInstagramFill />
                <AiFillTwitterCircle />
                </div>
                </div>
            </div>
        </div>
    );
}


