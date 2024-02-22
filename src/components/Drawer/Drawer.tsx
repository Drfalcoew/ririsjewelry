import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './Drawer.css';

const Drawer = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const pageList = [
        { name: 'home', icon: <HomeIcon />, link: '/' },
        { name: 'cart', icon: < ShoppingBasketOutlinedIcon/>, link: '/products' },
        { name: 'about', icon: <InfoIcon />, link: '/about' },
        { name: 'contact', icon: <EmailIcon />, link: '/contact' },
    ];

     const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='drawer-container' style={{ width: isOpen ? '200px' : '100px' }}>
            <div className="drawer-container-header">
                <div className="drawer-btn" onClick={toggleDrawer}>
                    {isOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </div>
            </div>
                <div className="drawer-container-content">
                    <div className="drawer-items">
                        {pageList.map((page, index) => (
                            <Link key={index} to={page.link} className="drawer-item" style={{ justifyContent: isOpen ? 'flex-start' : 'center'}}>
                                <div style={{margin: '0 25px'}}>{page.icon}</div>
                                {isOpen && page.name}
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Drawer;