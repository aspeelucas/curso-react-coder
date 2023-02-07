
import {useState,useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
export const ItemDetailCointeiner = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod=> prod.id === 2)
            setProducto(item)
        })
    }, [])
    return (
      <div className='card mb-3 itemDetailTamano d-flex justify-content-center align-items-center'>
            <ItemDetail item = {producto}/>
       </div>
    )
}