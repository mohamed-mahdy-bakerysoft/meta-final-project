import React from 'react';


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
                <img src="https://via.placeholder.com/500x400?text=Delicious+Mediterranean+Dish" alt="Delicious Mediterranean Dish" />
            </div>
        </section>
    );
}

export default HeroSection;
