import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CartView } from './Components/CartView/CartView';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/Navbar/NavBar'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/productos/:catId" element={ <ItemListContainer/> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <CartView/> } />
        <Route path="*" element={ <Navigate to="/"/> } />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
