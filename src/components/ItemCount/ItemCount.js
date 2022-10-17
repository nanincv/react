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
        <div className='d-flex justify-content-center align-items-end' >
          <Button variant="dark m-2" size="sm" onClick={handlerCounterDown}>-</Button>   
          <h3>{counter}</h3>     
          <Button variant="dark m-2" size="sm" onClick={handlerCounterUp}>+</Button>
          <Button variant="warning" size="sm" className='m-2' onClick={()=> onAdd(counter)}>Agregar al carrito</Button>
        </div>
      );
}; 

export default ItemCount
