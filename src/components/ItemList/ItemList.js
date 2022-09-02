import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';


const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
		<div >
			{items.map((item) => {
				return <Item key={item.id} data={item} />;
			})}
		</div>
	);
};

export default ItemList;
