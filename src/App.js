import './App.css';
import { NavBar } from './Components/Navbar/NavBar'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="contenedor">
      <NavBar/>
      <br/>
      <ItemListContainer productos="Productos" />
    </div>
  );
}

export default App;
