import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import Item from '../Item/Item';
import { getAllItems as getEmulsions, getItemCat } from '../../Firebase/firebaseConfig';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
	const [items, setItems] = useState([]);
  const { categoryid } = useParams();

	useEffect(() => {
    if ( categoryid === undefined) {
      getEmulsions ().then ( respuesta => {
        setItems (respuesta);
      });
    }
    else {
      getItemCat (categoryid).then ( respuesta => {
        setItems (respuesta);
      });

    }
	}, [categoryid]);
 
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

