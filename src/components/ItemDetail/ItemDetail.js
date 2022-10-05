import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../Context/CartContext';
import Spinner from 'react-bootstrap/Spinner';



const ItemDetail = ( {data} ) => {
  const [ isInCart, setIsInCart] = useState(false);
  const {addToCart} = useCartContext();

  const added = (counter) => {
    setIsInCart (true);
    addToCart( data, counter)
    console.log ("Agregaste al carrito:", data, counter)
  };

  if (!data.img) { 
    return <Spinner animation="grow" variant="info" style={ { margin:'250px', alignItems: 'center' }}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>

  };
  
  return (
    <div >
    <Card style={{ width: '30rem', margin: "50px"}}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Sabor: {data.flavor}</Card.Text>
        <Card.Text>Sabor: {data.description}</Card.Text>
        <Card.Text><h4>Precio: ${data.price} </h4></Card.Text>
        { isInCart ?
            <div>
            <Button style={{margin:'10px'}} as={Link} to="/cart">Terminar compra</Button> 
            <Button style={{margin:'10px'}} as={Link} to="/tienda">Seguir comprando</Button>
            </div>
        :
          <ItemCount stock={5} initial={1} onAdd={added} />
        }
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail;



