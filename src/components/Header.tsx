import { Link, useNavigate } from 'react-router-dom';
import './Components.css';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ReactGA from 'react-ga4';
import Badge from '@mui/material/Badge';
import { useUserSettings } from '../common/UserSettingsContext';

const Header = () => {
    const nav = useNavigate();
    const { state } = useUserSettings();

    return (
        <div className="header-container">
            <div className="header-container-left">
                <Link to="/" className="header-item">
                    <img src='/imgs/riri_icon.png' alt='preppy jewelry' className='header-logo' draggable='false' />
                </Link>           
            </div>

            <div className="header-container-right">
                <Badge badgeContent={state.cart.items.length} color="primary">
                    <button className='cart-btn' onClick={() => {
                            nav('/cart')
                            ReactGA.event({
                                category: 'Cart',
                                action: 'Clicked Contact Me'
                            });
                        }} >
                            {'Cart'}
                        <ShoppingBasketOutlinedIcon />
                    </button>
                </Badge>
            </div>
        </div>
    )
}

export default Header;