import './Components.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const name = "DRFALCOEW";

    return (
        <div className="footer-container">
            <div className="footer-container-left">
                <Link to="/contact" className="footer-item">Contact</Link>
                <Link to="/about" className="footer-item">About</Link>
            </div>
            <p className="footer-item-label">© {currentYear} {name}</p>
            <div className="footer-container-right">
            </div>
        </div>
    )
}

export default Footer;