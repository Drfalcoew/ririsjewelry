import React from 'react';
import './Components.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const HeroPanel = () => {
    const nav = useNavigate();
    const isMobile = window.innerWidth < 768;

    return (
        <div className="hero-panel-container">
            <div className="hero-panel-image-container">
                <img src="/imgs/pink-beads.webp" alt="bracelet" className='hero-panel-image' />
            </div>
            <div className="hero-panel-content">
                <div>Handcrafted Jewelry</div>
                <div style={{width: '80%', textAlign: 'left', fontSize: '18px', margin: '20px 0', color: '#5e5e5e', padding: '10px 0'}}>
                    Spring 2024 is here. Shop our new collection of handcrafted, preppy jewelry.
                </div>
                <Button variant="contained" onClick={() => nav('/products')} 
                    style={{marginTop: '10px', backgroundColor: '#E58BBE', color: 'white', fontWeight: 'bold',
                    padding: '10px 20px', fontSize: isMobile ? '12px' : '16px' }} className='hero-panel-button'>
                        SPRING COLLECTION
                </Button>
            </div>
        </div>
    )
}

export default HeroPanel;