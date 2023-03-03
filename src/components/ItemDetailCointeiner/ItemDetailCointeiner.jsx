
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProducto } from '../../firebase/firebase'

export const ItemDetailCointeiner = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProducto(id)
        .then(item => {
            setProducto(item)
        })
    }, [id])
    return (
      <div className='card mb-3 itemDetailTamano d-flex justify-content-center align-items-center'>
            <ItemDetail item = {producto}/>
       </div>
    )
}