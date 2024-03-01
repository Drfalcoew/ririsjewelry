import React from 'react';
import './Products.css';
import Product from './Product';

const Products = () => {

    const products = [
        {
            name: 'Etherial Rose',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
            price: 2000
        },
        {
            name: 'Blue & White Bracelet',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
            price: 749
        },
        {
            name: 'Crimson Bandito',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
            price: 1899
        },
        {
            name: 'Spring Bracelet',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
            price: 699
        },
        {
            name: 'Blue & White Bracelet',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
            price: 749
        },
        {
            name: 'Violet Salamander',
            description: 'Preppy Bracelets | Smiley Face Bracelet | Rainbow Heishi Pearl Bracelet | Trendy Star White Bead Bracelet | Disc Beads | Funky Jewelry',
            image: "/imgs/preppy_bracelet.webp",
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