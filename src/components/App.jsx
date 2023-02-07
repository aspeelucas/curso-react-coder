
import './App.css';
import Navbar from './Navbar/Navbar.';
import { ItemListContainer } from './ItemListConteiner/ItemListCointeiner';
import { ItemDetailCointeiner } from './ItemDetailCointeiner/ItemDetailCointeiner';



function App() {
  return (
   <>
     <Navbar/>
     <ItemListContainer/>
     <ItemDetailCointeiner/>
   </>
  );
};

export default App;
