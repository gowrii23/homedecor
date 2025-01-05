import React from 'react';
import './styles/footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="map-container">
            <iframe
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.501209419203!2d150.90584366963608!3d-33.94100368572696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295aa3c9bc40f%3A0xd7dca0374ffbc676!2spergolas%20and%20patios!5e0!3m2!1sen!2sin!4v1736064709911!5m2!1sen!2sin"
                width="100"
                height="100"
                allowFullScreen=""
                loading="lazy"
                title="Pergolas and Patios"
            ></iframe>
        </div>
        <div className="footer-info">
            <h3>Our Office</h3>
            <p>6 Humphreys Ave, Casula NSW 2170, Australia</p>
        </div>
    </footer>
);

export default Footer;
