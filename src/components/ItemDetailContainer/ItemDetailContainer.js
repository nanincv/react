import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail  from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getItem } from '../../Firebase/firebaseConfig';



const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
    const { id } = useParams();

	useEffect(() => {
		getItem (id).then ( (respuesta) => {
			setItem (respuesta);
		});
	}, [id]);


	return (
        <div className="d-flex justify-content-center">
			 <ItemDetail data={item} />
        </div>

	);
};

export default ItemDetailContainer;





