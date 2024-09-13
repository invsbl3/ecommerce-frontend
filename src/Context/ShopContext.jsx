import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);


const rootAPI = 'https://ecommerce-api-ebon-five.vercel.app/';
const endpointAllProducts = rootAPI + 'product/allproducts';

const rootCart = rootAPI + 'cart/';
const endpointGetCart = rootCart + 'getcart';
const endpointAddToCart = rootCart + 'addtocart';
const endpointRemoveFromCart = rootCart + 'removefromcart';

const ShopContextProvider = (props) => {

    const [all_products, setAll_Products] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(rootAPI + 'api/product/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Products(data))

        console.log(all_products);
        console.log(props);
        if (localStorage.getItem('auth-token')) {
            fetch(endpointGetCart, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }, [])


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(endpointAddToCart, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(endpointRemoveFromCart, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === item);
                totalAmount += itemInfo.new_price * cartItems[item];
            }

        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;