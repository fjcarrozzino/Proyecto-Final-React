import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/Navbar/NavBar'


function App() {
  return (
    <div className="contenedor">
      <NavBar/>
      <br/>
      <ItemListContainer item="item" />
    </div>
  );
}

export default App;
