import { CartWidget } from "../CartWidget/CartWidget"
import '../CartWidget/CartWidget.scss'
import '../Navbar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
    return (
        <div className="navbar">
            <header className="header-navbar">
                <a href="./">
                    <span> Logo y Marca</span>
                </a>
            </header>
            <nav className="nav-navbar">
                <ul className="ul-navbar">
                    <li><a href="/">Pagina 1</a></li>
                    <li><a href="/">Pagina 2</a></li>
                    <li><a href="/">Pagina 3</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}