import React from 'react';
import './Cart.css';
import { Button } from '@mui/material';

const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="checkout-content">
                <h1>Checkout</h1>
                <Button variant="contained" color="primary">Complete Purchase</Button>
            </div>
        </div>
    );
}

export default Checkout;