import CartWidget  from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
import Secciones from "./Secciones/Secciones";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TiendaCelu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarColor02">
            <ul className="navbar-nav ms-auto">
              <Categorias/>
              <Secciones/>
            </ul>
            <CartWidget cantidadCarr={5}/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
