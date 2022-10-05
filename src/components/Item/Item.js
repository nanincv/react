import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Item ( {data} ) {
  return (
    <Col>
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.flavor}
        </Card.Text>
        <Card.Text> $ {data.price} </Card.Text>
        <Button as={Link} to={`/producto/${data.id}`} key={data.id} variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Item;

