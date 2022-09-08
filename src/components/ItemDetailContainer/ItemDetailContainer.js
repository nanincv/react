import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/1' )
			.then((response) => response.json())
			.then((json) => setItem(json));
	}, []);

	return (
 <div className='container '>
			 <ItemDetail data={item} />;
      </div>
	);
};

export default ItemDetailContainer;





