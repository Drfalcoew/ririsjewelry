import './Components.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const name = "DRFALCOEW";

    return (
        <div className="footer-container">
            <div className="footer-container-left">
            </div>
            <p className="footer-item-label">© {currentYear} {name}</p>
            <div className="footer-container-right">
            </div>
        </div>
    )
}

export default Footer;