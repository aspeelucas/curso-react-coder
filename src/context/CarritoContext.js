import { useContext,createContext, useState } from "react";
const CarritoContext = createContext()


export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) =>{

    const  [ carrito, setCarrito ] = useState([])

    // Agregar

const addItem = (producto,cantidad)=>{

    if(isInCart(producto.id)){

        const indice = carrito.findIndex(prod=> prod.id === producto.id)
        const aux = [...carrito]
        aux[indice].cant = cantidad
        setCarrito(aux)

    }else{
        const prodCart ={
            ...producto,
            cant : cantidad
        }
        setCarrito([...carrito,prodCart])
    }

}



    // Delete

    const removeItem = (id) =>{
        setCarrito(carrito.filter(prod=> prod.id !== id))
    }

    // Total de cantidad de producto

const getItemQuantity = () => {
    return carrito.reduce((acum,prod)=> acum += prod.cant, 0)
}

    // Vaciar

    const emptyCart = () => {

        setCarrito([])
    }

    // Precio total en cart
  
    const totalPrice = ()=>{
        return carrito.reduce((acum,prod)=> acum +=(prod.cant * prod.precio),0)
    }

    // Si existe produ en el cart
    const isInCart = (id) => {

        return carrito.find(prod => prod.id ===id)

    }

    return(
        <CarritoContext.Provider value={{carrito,addItem,removeItem,emptyCart,getItemQuantity,totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )

}