import { CartWidget } from "../CartWidget/CartWidget"
import '../CartWidget/CartWidget.scss'
import '../Navbar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import logo from '../../imagenes/lina.svg'

export const NavBar = () => {
    return (
        <div className="navbar">
            <header className="header-navbar">
                <a href="./">
                    <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
                </a>
            </header>
            <nav className="nav-navbar">
                <ul className="ul-navbar">
                    <li><Link to="productos/Frutal">Frutal</Link></li>
                    <li><Link to="productos/Chocolate">Chocolate</Link></li>
                    <li><Link to="productos/Cheesecake">Cheesecake</Link></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}