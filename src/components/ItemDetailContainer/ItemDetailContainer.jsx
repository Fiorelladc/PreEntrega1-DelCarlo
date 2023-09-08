import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetailContainer = ({data}) => {
    console.log(data)
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.imagen} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.category}</ListGroup.Item>
                <ListGroup.Item>{data.size}</ListGroup.Item>
                <ListGroup.Item>{data.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button>Agregar el carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetailContainer;