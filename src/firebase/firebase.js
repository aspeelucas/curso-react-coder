
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,getDoc,getDocs,doc,updateDoc,} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDLo8sicLETbset80PVrIbklAynKvRX6Qg",
  authDomain: "react-coderhouse-6ab95.firebaseapp.com",
  projectId: "react-coderhouse-6ab95",
  storageBucket: "react-coderhouse-6ab95.appspot.com",
  messagingSenderId: "112796869809",
  appId: "1:112796869809:web:43218c8a2ebbd2f88d2e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore()

export const cargarBDD = async ()=>{

  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod) => {
    await addDoc (collection(db,"productos"),{
      nombre : prod.nombre,
      marca : prod.marca,
      modelo : prod.modelo,
      idCategoria: prod.idCategoria,
      stock : prod.stock,
      precio: prod.precio,
      img : prod.img,
    })

  })

}

export const getProductos = async () =>{
  const productos = await getDocs (collection(db,"productos"))
  const items = productos.docs.map(prod => {

    return{...prod.data(),id : prod.id}

  })

  return items
}

export const getProducto = async(id) =>{
  const producto = await getDoc(doc(db, "productos" , id))
  const item = {...producto.data(), id : producto.id}
  return item
}

export const updateProducto = async(id,info) =>{

  await updateDoc(doc(db,"productos",id,),info)
}

// crear orden de compra
export const createOrdenCompra = async(cliente,productos,precioTotal,fecha) =>{

  const ordenCompra = await addDoc(collection(db,"ordenCompra"),{

    datosCliente : cliente ,
    productos : productos,
    precioTotal : precioTotal,
    fecha : fecha

  })
  return ordenCompra
}

export const getOrdenCompra = async(id) =>{

  const ordenCompra = await getDoc(doc(db,"ordenCompra", id))
  const  orCompra = {...ordenCompra.data(),id : ordenCompra.id}
  return  orCompra
}