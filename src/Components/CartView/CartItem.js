import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartItem.scss'


export const CartItem = ({name, price, cantidad, id, img}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className='card-item'>
            <h3 className='titulo-cart'>{name}</h3>
            <img className='img-cart' src={img} alt={name}/>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <button 
                className="btn btn-danger boton-danger"
                onClick={() => { removerDelCarrito(id) }}
            >
                <BsFillTrashFill/>
            </button>
        </div>
    )
}
