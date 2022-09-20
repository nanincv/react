import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../Context/CartContext';



const ItemDetail = ( {data} ) => {
  const [ isInCart, setIsInCart] = useState(false);
  const {addToCart} = useCartContext();

  const added = (counter) => {
    setIsInCart (true);
    addToCart( data, counter)
    console.log ("Agregaste al carrito:", data, counter)
  };
  
  return (
    <div >
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text> $ {data.price} </Card.Text>
        { isInCart ?
            <Button as={Link} to="/cart">Terminar compra</Button>
        :
          <ItemCount stock={5} initial={1} onAdd={added} />
        }
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail;



