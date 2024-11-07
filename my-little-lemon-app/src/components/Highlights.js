import React from 'react';


function Highlights() {
    return (
        <section id="highlights" className="highlights">
            <h2>Weekly Specials</h2>
            <div className="specials-container">
                <div className="special">
                    <div className="dish-image">
                        <img src="https://via.placeholder.com/300x200?text=Greek+Salad" alt="Greek Salad" />
                    </div>
                    <h3>Greek Salad</h3>
                    <p>Fresh salad with cucumbers, tomatoes, olives, and feta cheese.</p>
                    <p>Price: $12</p>
                    <button className="button">Order Online</button>
                </div>
                <div className="special">
                    <div className="dish-image">
                        <img src="https://via.placeholder.com/300x200?text=Bruschetta" alt="Bruschetta" />
                    </div>
                    <h3>Bruschetta</h3>
                    <p>Grilled bread garnished with garlic, tomatoes, and basil.</p>
                    <p>Price: $8</p>
                    <button className="button">Order Online</button>
                </div>
                <div className="special">
                    <div className="dish-image">
                        <img src="https://via.placeholder.com/300x200?text=Lemon+Dessert" alt="Lemon Dessert" />
                    </div>
                    <h3>Lemon Dessert</h3>
                    <p>Tangy lemon-flavored dessert with a smooth, creamy texture.</p>
                    <p>Price: $6</p>
                    <button className="button">Order Online</button>
                </div>
            </div>
            <button className="button online-menu">View Full Menu</button>
        </section>
    );
}

export default Highlights;
