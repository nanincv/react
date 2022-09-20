import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = createContext ();
const useCartContext = () => useContext (CartContext);

export function CartContextProvider ({children}) {
    const [cart , setCart] = useState ([]);

    const addToCart = (item, cant ) => {
        if (isInCart (item.id)) {
            cart.map (cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.count += cant;

                }
            })

        }

        else {

        const newItem = {...item, cant };
        setCart ([...cart,newItem] );

    }


    }

    return ( 
        <CartContext.Provider value= {{ cart, addToCart } } >
        {children}
        </CartContext.Provider>

    )


}
 const isInCart = () => {
    
 }

export default useCartContext;