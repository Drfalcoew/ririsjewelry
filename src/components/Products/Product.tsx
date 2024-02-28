import React from 'react';
import './Products.css';
import { Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductProps } from '../../model/Models';
import { useNavigate } from 'react-router-dom';

const Product = (props: ProductProps) => {
    const isMobile = window.innerWidth < 768;
    const price = props.price / 100;
    const useNav = useNavigate();

    const HandleClick = () => {
        console.log('Product clicked');
        useNav(`/product/${props.id}`, {state: {product: props}});
    }

    function handleAddToCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.stopPropagation(); // Stop the event from propagating to the parent
        console.log('Add to cart clicked');
    }

    return (
        <Paper elevation={10} className="product-paper" onClick={HandleClick}>
            <CardMedia component="img" image={props.image} sx={{height: '200px', width: '100%',
             objectFit: 'cover'}}
                alt="Product" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{marginBottom: '30px'}}>
                    {props.description}
                </Typography>
            </CardContent>
            <div className="price-container">
                <Typography variant="h6" color="text.secondary">
                    ${price}
                </Typography>
            </div>
            <div className="add-to-cart-container">
                <Button onClick={handleAddToCart} style={{marginTop: '10px', fontWeight: 'bold', padding: '6px 10px',
                 fontSize: isMobile ? '12px' : '14px' }} className="add-to-cart-btn">
                        Add to cart
                </Button>
            </div>
        </Paper>
    );
}

export default Product;