import React from 'react';
import './Products.css';
import Product from './Product';

const Products = () => {

    const products = [
        {
            name: 'Etherial Rose',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random"
        },
        {
            name: 'Blue & White Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random"
        },
        {
            name: 'Crimson Bandito',
            description: 'A stylish spring bracelet',
            image: "https://source.unsplash.com/random"
        },
        {
            name: 'Spring Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random"
        },
        {
            name: 'Blue & White Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random"
        },
        {
            name: 'Violet Salamander',
            description: 'A stylish spring bracelet',
            image: "https://source.unsplash.com/random"
        },
    ]

    return (
        <div className="products-container">
            <div className="products-title-container">
                <h1>SPRING COLLECTION</h1>
            </div>
            <div className="products-content-container">
                {products.map((product, index) => {
                    return (
                        <Product key={index} title={product.name} description={product.description} 
                        image={product.image} />
                    )
                })
                }
            </div>
        </div>
    );
}

export default Products;