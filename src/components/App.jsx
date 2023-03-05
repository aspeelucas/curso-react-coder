import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// toastify
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
// Firebase

// components
import Navbar from './Navbar/Navbar.';
import { ItemListContainer } from './ItemListConteiner/ItemListCointeiner';
import { ItemDetailCointeiner } from './ItemDetailCointeiner/ItemDetailCointeiner';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';
import { Footer } from './Footer/Footer';
// context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';





function App() {
 
  return (
   <>
    <BrowserRouter>
    <CarritoProvider> 
    <DarkModeProvider>
     <Navbar/>
     <Routes>
     <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailCointeiner/>}/>
      <Route path='/category/:idCategoria' element={<ItemListContainer/>}/> 
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/checkout' element ={<Checkout/>}/>      
     </Routes>
     <Footer/>
     <ToastContainer/>
     </DarkModeProvider>
     </CarritoProvider> 
    </BrowserRouter>
   </>
  );
};

export default App;
