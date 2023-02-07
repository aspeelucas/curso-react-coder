
import { useState } from "react";
const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador ] = useState(valInicial);

    const aumentarContador = () =>(contador < stock)  && setContador(contador + 1);
    const restarContador = () => (contador > valInicial) && setContador(contador - 1);

    return (
        <>
            <button className="btn btn-dark" onClick={ ()=> aumentarContador() }>+</button>
              {contador}
            <button className="btn btn-dark" onClick={ () =>restarContador() }>-</button>
        </>
    );
}

export default ItemCount;
