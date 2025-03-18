import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || []
    );
    
    // Add item to cart
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );

        if (existingItemIndex !== -1) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += 1;
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }


       const removeQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === productId
        );

        if (existingItemIndex !== -1) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity -= 1;
            if (updatedItems[existingItemIndex].quantity === 0) {
                updatedItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedItems);
        }
       };
     

        // Remove item from cart
        const removeFromCart = (productId) => {
            const updatedItems = cartItems.filter((item) => item.id !== productId);
            setCartItems(updatedItems);
        };

        useEffect(() => {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems]);

        return (
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , removeQuantity }}>
                {children}
            </CartContext.Provider>
        );
    };


    export const useCart = () => useContext(CartContext);
