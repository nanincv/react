import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";


const CartContext = createContext ();
const useCartContext = () => useContext (CartContext);

export function CartContextProvider ({children}) {
    const [cart , setCart] = useState ([]);

    const addToCart = (item, cant) => {
        if (isInCart (item.id)) {
            const newCart = cart.map (cartItem => {
                if (cartItem.id === item.id) {
                    const copyItem = {...cartItem};
                    copyItem.cant += cant;
                    return copyItem;
                }
                else 
                return cartItem;
            })

            setCart (newCart);

        }

        else {

        const newItem = {...item, cant };
        setCart ([...cart,newItem] );

    }}

    const removeFromCart = (id) => {
        const newCart= [...cart];
        const cartFilter = newCart.filter ( item => {
            return item.id !== id;
        });
        setCart (cartFilter);
    }

    const clearCart = ()=> {
        setCart ([]);
    }

     const isInCart = (id) => {
        return cart.some (itemCart => itemCart.id === id );
        
     }
      
     const cantInCart= () => {
        let total = 0;
        cart.forEach((itemCart) => (total = total + itemCart.cant));
        return total;
      }
    
      const  totalPriceCart = () => {
        let total = 0;
        cart.forEach((itemCart) => (total = total + itemCart.cant * itemCart.price));
        return total;
      }




    return ( 
        <CartContext.Provider value= {{ cart, addToCart, removeFromCart, clearCart, cantInCart , totalPriceCart } } >
        {children}
        </CartContext.Provider>

    )
    

}


export default useCartContext;