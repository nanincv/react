import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';


const ItemListContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

	return (
 <div className='container '>
			 <ItemDetail item={data} />;
      </div>
	);
};

export default ItemListContainer;





