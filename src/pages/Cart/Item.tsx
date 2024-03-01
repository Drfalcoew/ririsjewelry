import { useState } from 'react';
import './Cart.css';
import { CartItem } from '../../model/Models';

const Item = (props: CartItem) => {

    const [quantity, setQuantity] = useState(props.quantity);


    return (
        <div className="cart-item">
            <img src={props.image} alt="Product" className="cart-item-image" />
            <div className="cart-item-details">
                <div className='item-info-container'>
                    <div className='item-title'>{props.title}</div>
                    <p className="item-detail">item number #4993</p>
                </div>
                <div className='item-quantity-container'>
                    <button className='item-quantity-button' onClick={() => { if (quantity > 1) setQuantity(quantity - 1)}}>-</button>
                    <div className='item-quantity'>{quantity}</div>
                    <button className='item-quantity-button' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div className='item-price-text'>${(props.price * quantity) / 100}</div>
                <button className='remove-item'>X</button>
            </div>
        </div>
    );
}

export default Item;