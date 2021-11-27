import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import '../CartWidget/CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <FaCartPlus className="CartWidget"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}
