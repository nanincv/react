import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BagHeart } from 'react-bootstrap-icons';
import useCartContext from '../../Context/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const { cantInCart } = useCartContext();
  return (
         <div>
        <BagHeart color="white" size={24}></BagHeart>
        <Badge pill bg="danger">{cantInCart()}</Badge>
        </div>
  )
}
export default CartWidget

