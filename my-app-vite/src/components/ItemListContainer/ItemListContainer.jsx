import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css";

const ItemListContainer = ({ products}) => {
    console.log (products);

    return (
    <div>
        {products.map((product) => {
            return(
                <Card style={{ width: '16rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.imagen} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button variant="primary">Más detalles</Button>
                    </Card.Body>
                </Card>
            )
        }
    )}
        </div>);
    };


export default ItemListContainer;
