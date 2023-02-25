import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CartWidget = ({cantidadCarr}) => {
    return (
        <>  
           <Link className='nav-link' to ={'/cart'} ><button className=" btn btn-dark text-danger"><BsFillCartFill></BsFillCartFill></button></Link> 
            <p>{cantidadCarr}</p>
        </>
    );
}

export default CartWidget;
