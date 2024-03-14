import React from 'react';
import './Cart.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';
import { CartItem } from '../../model/Models';



const Checkout = (props: {cart: CartItem[]}) => {
    const stripe = useStripe();
    const elements = useElements();

    const CARD_ELEMENT_OPTIONS = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

    return (
        <div className="checkout-container">
            <div className="checkout-content">
                <h1>Checkout</h1>
                <form>
                <CardElement options={CARD_ELEMENT_OPTIONS} />
                    <Button variant="contained" disabled={!stripe} type="submit"
                    color="primary">Complete Purchase</Button>
                </form>

            </div>
        </div>
    );
}

export default Checkout;