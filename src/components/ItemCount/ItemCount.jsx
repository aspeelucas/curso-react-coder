import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDarkModeContext } from "../../context/DarkModeContext";
const ItemCount = ({valInicial, stock,onAdd}) => {
    const {darkMode} = useDarkModeContext()
    const [contador, setContador ] = useState(valInicial);

    const aumentarContador = () =>(contador < stock)  && setContador(contador + 1);
    const restarContador = () => (contador > valInicial) && setContador(contador - 1);
    const agregarCarrr = () =>{    
        onAdd(contador)
        toast.success (`Se añadieron ${contador} productos al carrito`,{
        theme :"dark",
        autoClose: 1000,
        hideProgressBar: true,
    })};

    return (
        <>
            <button className="btn btn-dark" onClick={ ()=> aumentarContador() }>+</button>
              {contador}
            <button className="btn btn-dark" onClick={ () =>restarContador() }>-</button>
            <button className={`btn ${darkMode ? 'btn-secondary' : ' btn-light'}`} onClick={()=>agregarCarrr()}>Agregar al carrito</button>
            <Link className="nav-link" to={"/cart"}><button className={`btn ${darkMode ? 'btn-secondary' : ' btn-light'}`}>Ir a Carrito</button></Link>
            <Link className="nav-link" to={'/'} ><button className={`btn ${darkMode ? 'btn-secondary' : ' btn-light'}`}>Voler a Inicio</button></Link>
        </>
    );
}

export default ItemCount;
