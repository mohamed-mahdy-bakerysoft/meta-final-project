import React from 'react';


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://via.placeholder.com/50" alt="Little Lemon Logo" style={{ marginRight: '10px' }} />
                Little Lemon
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
