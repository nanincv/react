import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {

  const added = () => {
    alert (`Has agregado ${ItemCount.number} items al carrito`);
  };


  return (
    <div >
    <div className="ItemList">
        <h1>{greeting}</h1>
        </div>
        <div>
          <ItemCount stock={5} initial={1} onAdd={added} />
          </div>
          <div className='ItemContainer'>
				<ItemList />
			</div>
    </div>

  );

}

export default ItemListContainer


