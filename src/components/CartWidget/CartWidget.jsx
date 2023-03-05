import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';    
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>  
           <Link className='nav-link cantidadCarrito' to ={'/cart'} ><button className=" btn  text-white "><BsFillCartFill className='anchoIconCart'></BsFillCartFill></button> 
           {getItemQuantity() > 0 && <span className='radiusContador'>{getItemQuantity()}</span>}</Link>
        </>
    );
}

export default CartWidget;
