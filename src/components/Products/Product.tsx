import React from 'react';
import './Products.css';
import { Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <Paper elevation={10} className="product-paper">
            <CardMedia component="img" image={image} sx={{height: '200px', width: '100%',
             objectFit: 'cover'}}
                alt="Product" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{marginBottom: '30px'}}>
                    {description}
                </Typography>
            </CardContent>
            <div className="price-container">
                <Typography variant="h6" color="text.secondary">
                    $20.00
                </Typography>
            </div>
            <div className="add-to-cart-container">
                <Button size="small">Add to cart</Button>
            </div>
        </Paper>
    );
}

export default Product;