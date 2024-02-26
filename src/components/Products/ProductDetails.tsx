import React from 'react'
import './Products.css'
import { ProductProps } from '../../model/Models'

const ProductDetails = (product : ProductProps) => {
    return (
        <div className="product-details-container">
            <div className="product-details-image-container">
                <img src={product.image} alt="product" />
            </div>
            <div className="product-details-content-container">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductDetails;