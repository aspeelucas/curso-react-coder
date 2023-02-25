import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// toastify
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
// components
import Navbar from './Navbar/Navbar.';
import { ItemListContainer } from './ItemListConteiner/ItemListCointeiner';
import { ItemDetailCointeiner } from './ItemDetailCointeiner/ItemDetailCointeiner';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
// context
import { DarkModeProvider } from '../context/DarkModeContext';


function App() {
  return (
   <>
    <BrowserRouter>
    <DarkModeProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailCointeiner/>}/>
      <Route path='/category/:idCategoria' element={<ItemListContainer/>}/> 
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/cart' element ={<Cart/>}/>   
     </Routes>
     <ToastContainer/>
     </DarkModeProvider>
    </BrowserRouter>
   </>
  );
};

export default App;
