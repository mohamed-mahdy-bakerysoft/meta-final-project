import React from 'react';


function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="footer-logo">Little Lemon</div>
                <p>© 2023 Little Lemon. All Rights Reserved.</p>
            </div>
            <nav className="footer-nav">
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                </ul>
            </nav>
            <div className="contact-info">
                <p>Address: 123 Lemon Street, Chicago, IL</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@littlelemon.com</p>
                <p>Follow us on social media!</p>
            </div>
        </footer>
    );
}

export default Footer;
