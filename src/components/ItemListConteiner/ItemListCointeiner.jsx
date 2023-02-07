import {useState,useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => {
            const productsList = ItemList({products}) 
            setProductos(productsList)
        })
    }, [])
    return (
      <div className='d-flex justify-content-center align-items-center'>
         <div className='row  col-12 col-md-9 mb-5 mt-5 d-flex justify-content-center align-items-center  gapCards'>
            {productos}
          </div>
       </div>
    )
}