import { Item } from '../Item/Item'
import './ItemList.scss'
export const ItemList = ({items}) => {

    
    return (
        <div className="contenedor">
            <h2>Productos</h2>
            {console.log(items)}
            <div className="grid-items">
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    )
}
