import { BsFillCartFill } from 'react-icons/bs';
const CartWidget = ({cantidadCarr}) => {
    return (
        <>  
            <button className=" btn btn-dark text-danger"><BsFillCartFill></BsFillCartFill></button>
            <p>{cantidadCarr}</p>
        </>
    );
}

export default CartWidget;
