import React, { useState } from 'react';
// Firebase
import { collection, addDoc, } from 'firebase/firestore';
import firestoreDB from '../Firebase/firebaseConfig';
import Cart from '../components/Cart/Cart';


//import './Shop.css';
import { Form, Button, Alert } from 'react-bootstrap';

//import TextField from '@mui/material/TextField';
//import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';

const initialState = {
	name: '',
	lastname: '',
	phone: '',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Checkout = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(firestoreDB, 'orders'), {
			values,

		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
            <Cart/>
			<h1>Shop</h1>
            <Form onSubmit={onSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"  name='name' placeholder="Nombre" value ={values.name} onChange={handleOnChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name='lastname' placeholder="Apellido" value={values.lastName} onChange={handleOnChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword"  >
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="phone" name='phone' placeholder="Teléfono" value={values.phone} onChange={handleOnChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
	{purchaseID && <Alert style={{margin:"10px"}}>Se ha creado tu orden con el ID: ${purchaseID}</Alert>}
		</div>
	);
};

export default Checkout;
