import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import './CartView.scss'

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)
    return (
        <div className="container my-5 contenedor-cart">
             {
                carrito.length > 0 
                ?   <>
                        <h2> Carrito </h2>
                        <div className='my-5 card-cart'>
                        <section className='card'>
                            {
                                carrito.map((prod) => <CartItem key={prod.id} {...prod} />)
                            }
                        <hr/>
                        <div className='card-cart'>
                            <p> Total: ${totalCompra()} </p>
                            <button className="btn btn-danger boton-vaciar" onClick={vaciarCarrito}>Vaciar carrito</button>
                            <Link to="/checkout" className="btn btn-success mx-2 boton-terminar">Terminar mi compra </Link>
                        </div>
                        </section>
                        </div>
                    </>
                
                :   <>
                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Link to="/" className="btn btn-primary boton-volver-cart">Volver</Link>
                    </>
            }
        </div>
    )
}
