import './App.css';
import { NavBar } from './Components/Navbar/NavBar'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'
import {Clicker} from './Components/Clicker/Clicker'

function App() {
  return (
    <div className="contenedor">
      <NavBar/>
      <br/>
      <ItemListContainer productos="Productos" />
      <Clicker/>
    </div>
  );
}

export default App;
