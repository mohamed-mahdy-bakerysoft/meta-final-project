import React from 'react';
import picture from '../assets/image/heading_logo.jpg';


function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <p className="subtitle">Chicago</p>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="button">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src= {picture} alt="Delicious Mediterranean Dish" style={{height : '100vh'}}/>
            </div>
        </section>
    );
}

export default HeroSection;
