import {useState,useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// context
import { useDarkModeContext } from '../../context/DarkModeContext'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)
    useEffect(() => {
        if(idCategoria){
            fetch('../json/productos.json')
        .then(response => response.json())
        .then(items => {
            const products = items.filter(prod=> prod.idCategoria === idCategoria )
            const productsList = ItemList({products}) 
            setProductos(productsList)
        })
        } else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products}) 
                setProductos(productsList)
            })
        }

    }, [idCategoria])
    return (
      <div className='d-flex justify-content-center align-items-center'>
         <div className='row  col-12 col-md-9 mb-5 mt-5 d-flex justify-content-center align-items-center  gapCards'>
            {productos}
          </div>
       </div>
    )
}