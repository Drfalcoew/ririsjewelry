import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <Link to="/products" className="banner-item">
                <div>GET 20% OFF WITH PROMO CODE: BROBRO20 🛍</div>
            </Link>
        </div>
    )
}

export default Banner