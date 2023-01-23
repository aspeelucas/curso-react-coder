
const Categorias = () => {
    return (
        <>
        <li className="nav-item">
                <a className="nav-link " href="#"> <button className="btn btn-light">Home</button>
                </a>
              </li>
        <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className="btn btn-light">Categorias</button></a>
             <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Iphone</a>
                  <a className="dropdown-item" href="#">Samsung</a>
                  <a className="dropdown-item" href="#">Xiaomi</a>
                  <a className="dropdown-item" href="#">Motorola</a>
             </div>
        </li>
        </>
    );
}

export default Categorias;
