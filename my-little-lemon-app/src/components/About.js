import React from 'react';


function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Little Lemon</h2>
                <p>Located in the heart of Chicago, Little Lemon offers a cozy atmosphere with authentic Mediterranean cuisine. Our chefs bring years of experience and passion for cooking to deliver delicious meals crafted from fresh ingredients.</p>
            </div>
            <div className="about-images">
                <img src="https://via.placeholder.com/250x250?text=Interior+View" alt="Restaurant Interior" />
                <img src="https://via.placeholder.com/250x250?text=Chef+at+Work" alt="Chef at Work" />
            </div>
        </section>
    );
}

export default About;
