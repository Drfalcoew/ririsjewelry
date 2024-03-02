import React from 'react'
import './Products.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductProps } from '../../model/Models'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetails = () => {
    const nav = useNavigate();
    const { state } = useLocation();
    const isMobile = window.innerWidth < 768;
    let product : any = {}

    if (state) {
        product = state.product as ProductProps;
    }
    

    return (
        <div className="product-details-container">
            <div className="product-details-back-btn-container">
                <Button variant="contained" onClick={() => nav('/products')} className='product-details-back-btn'
                    style={{fontWeight: 'bold', fontSize: isMobile ? '12px' : '14px' }}>
                        <ArrowBackIcon />
                </Button>
            </div>
            <div className="product-details-content">
                <div className='product-details-title' style={{display: isMobile ? 'block' : 'none'}}>
                        {product.title}
                    </div>
                <div className="product-details-image-container">
                    <img src={product.image} alt="bracelet" className='product-image' />
                </div>
                <div className="product-details-item">
                    <div className='product-details-title' style={{display: !isMobile ? 'flex' : 'none'}}>
                        {product.title}
                    </div>
                    <div style={{width: '80%', textAlign: 'left', fontSize: '18px', margin: '20px 0', color: '#5e5e5e'}}>
                        {product.description}
                    </div>
                    <div className='product-details-price'>
                        <div style={{margin: isMobile ? '10px 0' : '10px 40px 0 0' , opacity: 0.7, alignItems: 'center'}}>
                            ${product.price / 100}
                        </div>
                        <Button variant="contained"
                            style={{marginTop: '10px', color: 'white', fontWeight: 'bold',
                            padding: '10px 20px', fontSize: isMobile ? '12px' : '16px' }} className='product-details-cart-btn'>
                                Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;