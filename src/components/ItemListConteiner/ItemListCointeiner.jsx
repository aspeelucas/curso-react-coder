import {useState,useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../firebase/firebase'
import { HeaderImg } from '../HeaderImg/HeaderImg'
import { HeaderTarjetas } from '../HeaderImg/HeaderTarjetas'
// context
import { useDarkModeContext } from '../../context/DarkModeContext'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)
    useEffect(() => {
        if(idCategoria){
            getProductos()
        .then(items => {
            const products = items.filter(prod=> prod.stock> 0).filter(prod=> prod.idCategoria === idCategoria )
            const productsList = <ItemList products={products} plantilla={'item'}/>
            setProductos(productsList)
        })
        } else{
           getProductos()
            .then(items => {
                const products =items.filter(prod=> prod.stock > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/>
                setProductos(productsList)
            })
        }

    }, [idCategoria])
    return (
       <>
      <HeaderImg/>
      <div className='container-fluid d-flex justify-content-center catalogoProductos align-items-center'>
         <div className='row p-0  col-xl-10 catalogoProductos  mt-5 d-flex justify-content-center align-items-center  gapCards'>
            {productos}
          </div>
       </div>
       <HeaderTarjetas/>
       </> 
    )
}