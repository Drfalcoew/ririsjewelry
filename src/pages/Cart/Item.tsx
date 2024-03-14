import { useState } from 'react';
import './Cart.css';
import { CartItem } from '../../model/Models';
import { UserSettingsAction } from '../../common/UserSettingsContext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';

interface ItemProps {
    item: CartItem;
    dispatch: React.Dispatch<UserSettingsAction>
}

const Item = (props: ItemProps) => {

    const [quantity, setQuantity] = useState(props.item.quantity);

    const updateQuantity = (newQuantity: number) => {
        setQuantity(newQuantity);
        // Dispatch action to update quantity in global state
        props.dispatch({
            type: 'UPDATE_ITEM_QUANTITY',
            payload: { id: props.item.id, quantity: newQuantity }
        });
    };

    const removeItem = () => {
        // Dispatch action to remove item from global state
        props.dispatch({
            type: 'REMOVE_ITEM',
            payload: { id: props.item.id }
        });
    }

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <img src={props.item.image} alt="Product" className="cart-item-image" />
                <div className='item-info-container'>
                    <div className='item-title'>{props.item.name}</div>
                    <p className="item-detail">Category: {props.item.category}</p>
                </div>
                <div className='item-quantity-container'>
                    <button className='item-quantity-button' onClick={() => { if (quantity > 1) updateQuantity(quantity - 1)}}>-</button>
                        <div className='item-quantity'>{quantity}</div>
                    <button className='item-quantity-button' onClick={() => updateQuantity(quantity + 1)}>+</button>
                </div>
                <div className='item-price-text'>${((props.item.price * quantity) / 100).toFixed(2)}</div>
                <Button sx={{color: 'black'}} className='remove-item' onClick={removeItem}>
                    <RemoveCircleOutlineIcon />
                </Button>
            </div>
        </div>
    );
}

export default Item;