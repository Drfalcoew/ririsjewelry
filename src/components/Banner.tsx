import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <Link to="/products" className="banner-item">
                Free shipping on orders over $10! 🛍
            </Link>
        </div>
    )
}

export default Banner