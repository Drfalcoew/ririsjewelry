import { Link, useNavigate } from 'react-router-dom';
import './Components.css';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ReactGA from 'react-ga4';

const Header = () => {
    const nav = useNavigate();
    const isMobile = window.innerWidth < 768;

    return (
        <div className="header-container">
            <div className="header-container-left">
                <Link to="/" className="header-item">riri's jewelry</Link>           
            </div>
            <div className="header-container-right">
                <button className='cart-btn' onClick={() => {
                        nav('/cart')
                        ReactGA.event({
                            category: 'Cart',
                            action: 'Clicked Contact Me'
                        });
                    }} >
                        {isMobile ? '' : 'cart'}
                        <ShoppingBasketOutlinedIcon />
                    </button>
            </div>
        </div>
    )
}

export default Header;