import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css";
import { useNavigate } from "react-router-dom";

const ItemListContainer = ({ products}) => {
const navigate = useNavigate();
    return (
    <div className='card-container'>
        {products.map((product) => {
            return (
                    <Card style={{width:"16rem"}} key={product.id}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate(`/item/${product.id}`)}>Más detalles</Button>
                        </Card.Body>
                    </Card>
            )
        }
    )}
        </div>);
    };


export default ItemListContainer;
