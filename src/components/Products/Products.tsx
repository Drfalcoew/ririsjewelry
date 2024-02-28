import React from 'react';
import './Products.css';
import Product from './Product';

const Products = () => {

    const products = [
        {
            name: 'Etherial Rose',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random",
            price: 2000
        },
        {
            name: 'Blue & White Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random",
            price: 749
        },
        {
            name: 'Crimson Bandito',
            description: 'A stylish spring bracelet',
            image: "https://source.unsplash.com/random",
            price: 1899
        },
        {
            name: 'Spring Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random",
            price: 699
        },
        {
            name: 'Blue & White Bracelet',
            description: 'A beautiful bracelet for the spring season',
            image: "https://source.unsplash.com/random",
            price: 749
        },
        {
            name: 'Violet Salamander',
            description: 'A stylish spring bracelet',
            image: "https://source.unsplash.com/random",
            price: 999
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
                        price={product.price} id={index}
                        image={product.image} />
                    )
                })
                }
            </div>
        </div>
    );
}

export default Products;