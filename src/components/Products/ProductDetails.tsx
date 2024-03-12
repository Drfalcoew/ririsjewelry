import React, { useState } from 'react'
import './Products.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductType } from '../../model/Models'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAddToCart } from '../../pages/Cart/Cart'

const ProductDetails = () => {
    const nav = useNavigate();
    const { state } = useLocation();
    const isMobile = window.innerWidth < 768;
    let [product] = useState<ProductType>(state.product as ProductType);
    const [imagePreview, setImagePreview] = useState<string>(state.product.images[0]);
    const addProductToCart = useAddToCart();

    return (
        <div className="product-page">
            <div className="product-details-container">
                <div className="product-details-back-btn-container">
                    <Button variant="contained" onClick={() => nav('/products')} className='product-details-back-btn'
                        style={{fontWeight: 'bold', fontSize: isMobile ? '12px' : '14px' }}>
                            <ArrowBackIcon />
                    </Button>
                </div>
                <div className="product-details-content">
                    <div className='product-details-title' style={{display: isMobile ? 'block' : 'none'}}>
                            {product.name}
                        </div>
                    <div className="product-details-image-container">
                        <div className='product-image-container'>
                            <img src={imagePreview} alt="bracelet" className='product-image' />
                        </div>
                        <div className='product-details-extra-images-container'>
                            {product.images.map((image: string, index: number) => {
                                return (
                                    <img src={image} alt="bracelet" key={index} className='product-details-extra-image'
                                        onClick={() => {
                                            setImagePreview(image);
                                        }} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="product-details-item">
                        <div className='product-details-title' style={{display: !isMobile ? 'block' : 'none'}}>
                            {product.name}
                        </div>
                        <div style={{margin: isMobile ? '10px 0' : '10px 40px 0 0' , opacity: 0.7, alignItems: 'center', fontSize: '20px', fontWeight: 700}}>
                                ${product.price / 100}
                            </div>
                        <div style={{width: '80%', textAlign: 'left', fontSize: '18px', margin: '20px 0', color: '#5e5e5e'}}>
                            {product.description}
                        </div>
                        <div className='product-details-price'>
                            <Button variant="contained"
                                style={{marginTop: '10px', color: 'white', fontWeight: 'bold',
                                padding: '10px 20px', fontSize: isMobile ? '12px' : '16px' }} 
                                onClick={() => {
                                    addProductToCart(product);
                                    // nav('/cart');
                                }}
                                className='product-details-cart-btn'>
                                    Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;