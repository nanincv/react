import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item';
import './itemList.css';


const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
 <div className='Contenedor-Productos'>
			{items.map((item) => {
				return <Item key={item.id} data={item} />;
			})}
</div>
	);
};

export default ItemList;


