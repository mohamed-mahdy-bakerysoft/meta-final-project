import React from 'react';
import interior from '../assets/image/internal_view.jpg';
import chef from '../assets/image/chef.jpg';


function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Little Lemon</h2>
                <p>Located in the heart of Chicago, Little Lemon offers a cozy atmosphere with authentic Mediterranean cuisine. Our chefs bring years of experience and passion for cooking to deliver delicious meals crafted from fresh ingredients.</p>
            </div>
            <div className="about-images">
                <img src={interior} alt="Restaurant Interior" />
                <img src={chef} alt="Chef at Work" />
            </div>
        </section>
    );
}

export default About;
