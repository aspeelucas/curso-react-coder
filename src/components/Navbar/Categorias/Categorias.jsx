import { Link } from "react-router-dom";
import React from "react";
const Categorias = React.memo (() => {
    return (
        <>
        <li className="nav-item">
                <Link className="nav-link " to={"/"}> <button className="btn textoNav">Home</button>
                </Link>
              </li>
        <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className="btn textoNav">Categorias</button></a>
             <div className="dropdown-menu  text-center bg-black">
                  <Link className="dropdown-item" to = {"category/iphone"}>Iphone</Link>
                  <Link className="dropdown-item" to ={"category/samsung"}>Samsung</Link>
                  <Link className="dropdown-item" to ={"category/motorola"}>Motorola</Link>
             </div>
        </li>
        </>
    );
})

export default Categorias;
