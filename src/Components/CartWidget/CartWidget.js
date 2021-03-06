import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../CartWidget/CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad, carrito} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'hidden' : ''}>
            <Link to="/cart">
            <FaShoppingCart className="CartWidget"/>
            <span className="cantidad">{totalCantidad()}</span>
            </Link>
        </div>
    )
}
