import React, { useEffect } from 'react';
import './Cart.css';
import { ProductType } from '../../model/Models';
import Item from './Item';
import { useUserSettings } from '../../common/UserSettingsContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CartItem } from '../../model/Models';
import CircularProgress from '@mui/material/CircularProgress';
import EmptyCart from '@mui/icons-material/ProductionQuantityLimits';
import Box from '@mui/material/Box';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutRequest {
    products: CartItem[];
}

const Cart = () => {
    const { state, dispatch } = useUserSettings();
    const [total, setTotal] = React.useState<number>(0);

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const nav = useNavigate();
    const isMobile = window.innerWidth < 768;

    const buttonSx = {
        ...(success && {
          bgcolor: '#E58BBE',
          '&:hover': {
            bgcolor: '#F9CDE6',
          },
        }),
      };

    useEffect(() => {
        let newTotal = state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotal(newTotal);
    }, [state.cart.items]);
    
    const handleSubmit = async () => {
        setLoading(true);
        const checkoutRequest: CheckoutRequest = {
            products: state.cart.items
        };
        
        // Use fetch API to send the paymentMethodId to your backend
        const apiURL = process.env.REACT_APP_API_URL;

        fetch(apiURL!, { //  + '/checkout/session' { //on dev
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutRequest),
        })
        .then(response => response.text())
        .then(url => {
            setLoading(false);
            setSuccess(true);
            window.location.href = url;
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle network or server errors
        });
    };

    return (
        <div className="cart-container">
            <div className="cart-content">
                <div className="cart-content-header">
                    <Button variant="contained" onClick={() => nav('/products')} className='cart-back-btn'
                            style={{fontWeight: 'bold', fontSize: isMobile ? '12px' : '14px', marginRight: '10px' }}>
                                <ArrowBackIcon />
                    </Button>
                <div className='cart-title'>
                    My Cart
                </div>
                </div>
                <div className="cart-content-top">
                    {state.cart.items.length > 0 ? 
                    state.cart.items.map((item, index) => (
                        <div className="cart-item-root" key={index}>
                            <Item key={index} item={item} dispatch={dispatch} />
                        </div>
                    )) : 
                    <div className="cart-item-root" style={{marginTop: '50px'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{marginTop: '25px', backgroundColor: '#E58BBE', borderRadius: '50%', padding: '20px', width: '100px', height: '100px'}}>
                                <EmptyCart sx={{ fontSize: 100, color: '#fff'}}/>
                            </div>
                        </div>
                        <p>Your cart is empty!</p>
                        <Button variant="contained" onClick={() => nav('/products')} className="checkout-button" style={{animation: 'none'}}>
                            Continue Shopping
                        </Button>
                    </div>
                    }
                </div>
                <div className="cart-content-footer" style={{display: state.cart.items.length > 0 ? 'flex' : 'none'}}>
                    <div className='cart-total'>
                        <h2>Subtotal: ${(total / 100).toFixed(2)}</h2>
                    </div>
                    <div className="checkout-button-container">            
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    className='checkout-button' 
                                    variant="contained"
                                    sx={buttonSx}
                                    disabled={loading}
                                    onClick={() => handleSubmit()}
                                >
                                Checkout
                                </Button>
                                {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                    color: '#fff',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                    }}
                                />
                                )}
                            </Box>
                    </div>
                </div>
                
            </div>
            {/* <Elements stripe={stripePromise}>
                <Checkout cart={state.cart.items} />
            </Elements> */}
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
            const productWithQuantity = { ...productToAdd, quantity: 1, image: productToAdd.images[0], category: productToAdd.category};
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