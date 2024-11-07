import React from 'react';

function Highlights() {
    return (
        <section id="highlights">
            <h2>Weekly Specials</h2>
            <div className="specials-container">
                <div className="special">
                    <h3>Dish Name</h3>
                    <p>Description of the dish</p>
                    <p>Price: $X</p>
                    <div className="dish-image">[Image Placeholder]</div>
                    <button>Order Online</button>
                </div>
                {/* Repeat for more specials */}
            </div>
        </section>
    );
}

export default Highlights;
