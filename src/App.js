
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/Navbar/NavBar'
import {CartProvider } from './context/CartContext';
import { AppRouter } from './router/AppRouter';


function App() {

  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <AppRouter/>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
