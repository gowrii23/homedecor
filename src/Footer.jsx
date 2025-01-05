import React from 'react';
import './styles/footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86332.21157351325!2d80.18249236650043!3d12.93057575243884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267292c15b7bb%3A0xd37376b7f62e2ae2!2sUPTOWN%20%7C%2024%2F7%20entertainment%20centre%2C%20Kathipara%20Urban%20Square!5e0!3m2!1sen!2sin!4v1736060891311!5m2!1sen!2sin"
                width="100"
                height="100"
                allowFullScreen=""
                loading="lazy"
                title="Home Decor Corporation Map"
            ></iframe>
        </div>
        <div className="footer-info">
            <h3>Our Office</h3>
            <p>Home Decor Corporation (I) Pvt. Ltd., Chennai, India</p>
        </div>
    </footer>
);

export default Footer;
