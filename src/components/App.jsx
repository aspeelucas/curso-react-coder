
import './App.css';
import Navbar from './Navbar/Navbar.';
import ItemListCointeiner from './ItemListConteiner/ItemListCointeiner';



function App() {
  return (
   <>
     <Navbar/>
     <ItemListCointeiner catalogoProductos={`HOLA AQUI VA EL CATALOGO DE PRODUCTOS`}/>
   </>
  );
};

export default App;
