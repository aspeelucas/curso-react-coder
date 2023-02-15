import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar.';
import { ItemListContainer } from './ItemListConteiner/ItemListCointeiner';
import { ItemDetailCointeiner } from './ItemDetailCointeiner/ItemDetailCointeiner';
import { Contacto } from './Contacto/Contacto';



function App() {
  return (
   <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailCointeiner/>}/>
      <Route path='/category/:idCategoria' element={<ItemListContainer/>}/> 
      <Route path='/contacto' element={<Contacto/>}/>     
     </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
