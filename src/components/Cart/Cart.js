import React from 'react'; 
import useCartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import firestoreDB from '../../Firebase/firebaseConfig';



//import Table from 'react-bootstrap/Table';




const Cart = () => {
 const {cart, removeFromCart, clearCart, totalPriceCart} = useCartContext();


 // ordenes

 const createOrder = async () => {
  let itemsForDB = cart.map((item) => ({
    id: item.id,
    title: item.name,
    price: item.price,
    quantity: item.cant,
}));
  const order = {
    buyer: {
    name: "Natalia", 
    phone: "555-5555", 
    email: "nmartorelligmail.com"
    },
    date: serverTimestamp (),
    items: itemsForDB,
    total: totalPriceCart(),
  }
 // console.log (order)
  const newOrderRef = doc(collection(firestoreDB, "orders")) 
  await setDoc(newOrderRef, order);
  alert ( 'Se ha creado tu orden con el ID:' + newOrderRef.id );
  clearCart();


};



// cart

 
 if (cart.length === 0) {
  return <div style= {{textAlign:"center", margin: "50vh"}}>
    <p> Su carrito está vacío</p>
    <Button as={Link} to="/tienda">Volver a la tienda</Button>
    </div>
    }
else { 
   return <div>
    {cart.map ( itemCart => {
         //Acá va tabla de bootstrap 
    return <div key={itemCart.id}>
      <img alt={itemCart.title} width={"100px"} src={itemCart.img} ></img>
      <h2>{itemCart.name}</h2>
      <h2>{itemCart.cant}</h2>
      <h2>$ {itemCart.price}</h2>
      <button style={{color:"red"}} onClick={()=> removeFromCart(itemCart.id)} >x</button>
      <hr/><br></br>
      </div>
    })}
      <h5>Total a pagar: ${totalPriceCart().toFixed(2)}{" "}</h5>
      <Button onClick={clearCart}>Vaciar Carrito</Button>
      <Button onClick={createOrder}>Check  out</Button>
      </div>
      

  
  }//cierro else
}//cierro Cart

export default Cart;

