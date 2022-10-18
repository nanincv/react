import React, {useState} from 'react'; 
import useCartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Button,  Form, Container, Table} from 'react-bootstrap';
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import firestoreDB from '../../Firebase/firebaseConfig';
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";  
import './cart.css'


const initialState = {
	name: '',
	lastname: '',
	phone: '',
};


const Cart = () => {
 const {cart, removeFromCart, clearCart, totalPriceCart} = useCartContext();
 const [values, setValues] = useState(initialState);

 const handleOnChange = (e) => {
  const { value, name } = e.target;
  setValues({ ...values, [name]: value });
};

const navigate = useNavigate()

 // ordenes
 const createOrder = async (e) => {
  e.preventDefault();
  let itemsForDB = cart.map((item) => ({
    id: item.id,
    title: item.name,
    price: item.price,
    quantity: item.cant,
}));
  const order = {
    buyer: values,
    date: serverTimestamp (),
    items: itemsForDB,
    total: totalPriceCart(),
  }

  //Para verifica la orden en consola
  console.log (order)

  // Ide de la orden y aviso de éxito
  const newOrderRef = doc(collection(firestoreDB, "orders")) 
  await setDoc(newOrderRef, order);
  Swal.fire(
    'Gracias por tu compra!',
    'Se ha creado tu orden con el ID' + newOrderRef.id,
    'success'
  )
  //alert ('Se ha creado tu orden con el ID' + newOrderRef.id);
 clearCart();
 navigate ('/tienda')

};


// cart

 if (cart.length === 0) {
  return <div style= {{textAlign:"center", margin: "50vh"}}>
    <p> Su carrito está vacío</p>
    <Button as={Link} to="/tienda" variant='warning'>Volver a la tienda</Button>
    </div>
    }
else { 
   return <div>
    <Container className='tabla' >
    <Table striped bordered hover className='alig-items-end'>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th>Producto</th>
                <th>Unidades</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>{cart.map ( itemCart => {
         //Acá va tabla de bootstrap 
    return <tr key={itemCart.id} >
      <th><button style={{color:"black",border:"none"}} onClick={()=> removeFromCart(itemCart.id)} >x</button></th>
      <th><img className='imgCart' alt={itemCart.title} width={"100px"} src={itemCart.img} ></img></th>
      <th>{itemCart.name}</th>
      <th>{itemCart.cant}</th>
      <th>$ {itemCart.price}</th>
      </tr>})}
    </tbody>
    <tbody>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total a Pagar:<strong><h5>${totalPriceCart().toFixed(2)}{" "}</h5></strong>
                <Button style={{margin:'10px'}} onClick={clearCart} variant="dark" size="sm">Vaciar Carrito</Button>        
                <Button as={Link} to="/tienda" variant='warning' size="sm">Seguir comprando</Button>      
                </td>
                </tr>
    </tbody>
      </Table>
      </Container>
      <div>
        <hr></hr>
               {/* Checkout datos*/}
			<h3>Datos del comprador</h3>
         <Container className='tabla' >
            <Form className='mb-3' onSubmit={createOrder} >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"  name='name' placeholder="Nombre" value ={values.name} onChange={handleOnChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name='lastname' placeholder="Apellido" value={values.lastName} onChange={handleOnChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword"  >
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="phone" name='phone' placeholder="Teléfono" value={values.phone} onChange={handleOnChange}/>
      </Form.Group>
      <Button variant="warning" type="submit">
        Enviar pedido
      </Button>
    </Form>  
    </Container>

		</div>







      </div>

    
      

  
  }//cierro else
}//cierro Cart

export default Cart;

/*  <Button onClick={createOrder} variant="warning">Check out</Button>*/

