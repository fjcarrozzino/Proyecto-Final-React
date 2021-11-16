import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {

    
    return (
        <Container className="my-5">
            <h2>Productos</h2>
            <Row>
                {items.slice(0,1).map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}
