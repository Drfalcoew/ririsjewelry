import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <Link to="/products" className="banner-item">
                Spring into your PREPPY SPIRIT with Our Latest Jewelry Collection! 🛍
            </Link>
        </div>
    )
}

export default Banner