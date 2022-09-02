import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item ( {data} ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text> $ {data.price} </Card.Text>
        <Button variant="primary">Do something</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;

