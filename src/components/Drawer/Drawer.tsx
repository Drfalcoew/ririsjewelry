import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './Drawer.css';

const Drawer = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const pageList = [
        { name: 'Home', icon: <HomeIcon />, link: '/' },
        { name: 'Shop', icon: < StorefrontIcon/>, link: '/products' },
        { name: 'About', icon: <InfoIcon />, link: '/about' },
        { name: 'Contact', icon: <EmailIcon />, link: '/contact' },
    ];

     const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
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
                            <Link key={index} to={page.link} className={`drawer-item ${!isOpen ? 'drawer-icon' : ''}`} style={{ justifyContent: isOpen ? 'flex-start' : 'center'}}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <div style={{margin: '0 25px'}}>{page.icon}</div>
                                <div style={{display: isOpen ? 'block' : hoveredIndex === index ? 'block' : 'none'}}>
                                    {page.name}
                                </div>
                                
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Drawer;