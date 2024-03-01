import React from 'react';
import './Cart.css';
import { ShoppingCartProps } from '../../model/Models';
import Item from './Item';
import { useUserSettings } from '../../common/UserSettingsContext';
import Checkout from './Checkout';
import Divider from '@mui/material/Divider';


const Cart = () => {
    const userContext = useUserSettings();

    const myCart: ShoppingCartProps = userContext.state.cart;

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
                    {myCart.items.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <Item key={index} {...item} />
                            <Divider variant="middle" />
                        </div>
                    ))}
                </div>
                <div className="cart-content-footer">
                    <div className='cart-total'>
                        <h2>Total: ${myCart.total / 100}</h2>
                    </div>
                </div>
            </div>
            <Checkout />
        </div>
    );
}

export default Cart;