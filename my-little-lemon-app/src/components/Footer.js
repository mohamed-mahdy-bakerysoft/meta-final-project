import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-logo">Little Lemon Logo</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="contact-info">
                <p>Contact us at: [Phone Number] | [Email]</p>
                <p>Follow us on: [Social Media Links]</p>
            </div>
        </footer>
    );
}

export default Footer;
