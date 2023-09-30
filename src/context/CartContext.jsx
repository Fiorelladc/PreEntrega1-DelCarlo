import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState (() => {
        const values = localStorage.getItem('cartItems');
        if(values) return JSON.parse(values)
        return []
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    

    const totalItems = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

    const addItem = (product) => {
        
        setCartItems (items => {
            if (items.find (item => item.id == product.id)) {
                console.log("existe producto")
                return items.map ( item=> {
                    if (item.id == product.id) {
                        return {
                            ...item, quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            } else {
                return [ ...items, {
                    ...product, quantity: 1
                }]
            }
        });
}

    const deleteItem =(itemId) => {
        setCartItems( items => {
            return items.filter(item => item.id !== itemId)
        })
    }

    const removeItem = (itemId) => {
        setCartItems( items => {
            if (items.find (item => item.id == itemId).quantity == 1) {
                return items.filter( item=> item.id !== itemId)
            } else {
                return items.map(item => {
                    if(item.id === itemId) {
                        return { ...item, quantity: item.quantity - 1 }
                    } 
                    return item
                })
            }
        })
    }

    const cleanCart = () => setCartItems([]);

    const totalPrice = cartItems?.reduce((total, item) => {
        return total + item.quantity * item.price
    },0)


    return (
        <CartContext.Provider value={{
            cartItems,
            addItem,
            deleteItem,
            totalItems,
            removeItem,
            cleanCart,
            totalPrice

        }}>
            {children}
        </CartContext.Provider>
    )
}
