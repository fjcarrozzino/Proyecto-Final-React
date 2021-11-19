import { CartWidget } from "../CartWidget/CartWidget"
import '../CartWidget/CartWidget.scss'
import '../Navbar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export const NavBar = () => {
    return (
        <div className="navbar">
            <header className="header-navbar">
                <a href="./">
                    <Link to="/"><h1>Logo</h1></Link>
                </a>
            </header>
            <nav className="nav-navbar">
                <ul className="ul-navbar">
                    <li><Link to="productos/zapatillas">Zapatillas</Link></li>
                    <li><Link to="productos/remeras">Remeras</Link></li>
                    <li><Link to="productos/buzos">Buzos</Link></li>
                    <Link to="cart"><CartWidget/> </Link>
                </ul>
            </nav>
        </div>
    )
}