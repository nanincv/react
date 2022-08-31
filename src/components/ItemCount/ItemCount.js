import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState( initial);
    
    const handlerCounterUp = () => {

        if ( counter < stock ) {  
            
        setCounter(counter + 1);

        }

      };

      const handlerCounterDown = () => {

        if ( counter > initial ) {  
            
        setCounter(counter - 1);

        }

      };

      ItemCount.number = counter
    
      return (
        <div className='d-flex justify-content-center'>
          <Button variant="secondary m-2"onClick={handlerCounterDown}>-</Button>   
          <h1>{counter}</h1>     
          <Button variant="secondary m-2" onClick={handlerCounterUp}>+</Button>
          <Button variant="dark" size="sm" className='m-2' onClick={onAdd}>Agregar al carrito</Button>
        </div>
      );
}; 

export default ItemCount
