import React, { useEffect } from 'react';
import './Cart.css';
import { ProductType } from '../../model/Models';
import Item from './Item';
import { useUserSettings } from '../../common/UserSettingsContext';
import Checkout from './Checkout';
import Divider from '@mui/material/Divider';


const Cart = () => {
    const { state, dispatch } = useUserSettings();
    const [total, setTotal] = React.useState<number>(0);

    useEffect(() => {
        let newTotal = state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotal(newTotal);
    }, [state.cart.items]);
    
    // const HandleClick = () => {
    //     console.log('Product clicked');
    //     useNav(`/product/${myCart.items[0].id}`, {state: {product: myCart.items[0]}});
    // }

    return (
        <div className="cart-container">
            <div className="cart-content">
                <div className="cart-content-header">
                    My Cart
                </div>
                <div className="cart-content-top">
                    {state.cart.items.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <Item key={index} item={item} dispatch={dispatch} />
                            <Divider variant="middle" />
                        </div>
                    ))}
                </div>
                <div className="cart-content-footer">
                    <div className='cart-total'>
                        <h2>Total: ${total / 100}</h2>
                    </div>
                </div>
            </div>
            <Checkout />
        </div>
    );
}

export function useAddToCart() {
    const { state, dispatch } = useUserSettings(); 

    const addToCart = (productToAdd: ProductType) => {
        // Find if the product already exists in the cart
        const existingProductIndex = state.cart.items.findIndex(item => item.id === productToAdd.id);
        let newCart = { ...state.cart };

        if (existingProductIndex > -1) {
            // If it does, update the quantity
            let existingProduct = newCart.items[existingProductIndex];
            existingProduct.quantity += 1; // Assuming you want to add one more of this product
            newCart.items[existingProductIndex] = existingProduct;
        } else {
            // If it doesn't, add the product to the cart
            const productWithQuantity = { ...productToAdd, quantity: 1, image: productToAdd.images[0] };
            newCart.items.push(productWithQuantity);
        }

        // Recalculate the total price if necessary
        newCart.total = newCart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

        // Update the cart in the global state and cache
        dispatch({ type: 'SET_CART', payload: newCart });
    };

    return addToCart;
};

export default Cart;