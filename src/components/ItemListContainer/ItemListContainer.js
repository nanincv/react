import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

  const added = () => {
    alert (`Has agregado ${ItemCount.number} items al carrito`);
  };


  return (
    <div>
    <div className="ItemList">
        <h1>{greeting}</h1>
        </div>
        <div>
          <ItemCount stock={5} initial={1} onAdd={added} />
          </div>
    </div>

  );

}

export default ItemListContainer

