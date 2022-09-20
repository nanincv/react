import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail  from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => setItem(json));
	}, [id]);

	return (
        <div className="d-flex justify-content-center">
			 <ItemDetail data={item} />
        </div>

	);
};

export default ItemDetailContainer;





