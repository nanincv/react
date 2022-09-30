import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Spinner } from 'react-bootstrap';
import Item from '../Item/Item';
import './itemList.css';


const ItemList = ({emulsiones} ) => {

	if (!Item) { 
		return <Spinner animation="grow" variant="info" style={ { margin:'50vh', alignItems: 'center' }}>
		<span className="visually-hidden">Loading...</span>
	  </Spinner>

} else
 
	return (
 <Container className="mt-5">
	<Row className="g-4">
			{emulsiones.map((item) => {
				return <Item key={item.id} data={item} />;
			})}
	</Row>
</Container>
	);

}


export default ItemList;
