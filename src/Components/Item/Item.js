import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ({id, name, img, desc, price, category}) => {
    return (
        <article key={id} className="card m-3 card-item" style={{width: "25rem"}}>
            <img className="img-card" src={img} alt={name}/>
            <div className="card-body card-item2">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </article>
    )
}
