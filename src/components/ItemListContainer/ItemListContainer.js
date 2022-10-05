import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import Item from '../Item/Item';
import { getAllItems as getEmulsions } from '../../Firebase/firebaseConfig';


const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
    getEmulsions ().then ( respuesta => {
      setItems (respuesta);
    });
	}, []);
 
	if (!Item) { 
		return <Spinner animation="grow" variant="info" style={ { margin:'50vh', alignItems: 'center' }}>
		<span className="visually-hidden">Loading...</span>
	  </Spinner>

}
return (
  <div >
  <div className="ItemList">
      <h1>Productos</h1>
      </div>
        <div>
          <ItemList emulsiones = {items} />
          </div>
  </div>

);
}

export default ItemListContainer;

