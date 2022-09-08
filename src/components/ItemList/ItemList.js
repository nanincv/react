import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item';


const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/1')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
 <div className='container '>
        <div className='d-flex justify-content-around"'>
            <div className='col-4'>
			{items.map((item) => {
				return <Item key={item.id} data={item} />;
			})}
        </div>
    </div>
</div>
	);
};

export default ItemList;


