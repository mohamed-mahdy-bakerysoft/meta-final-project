import React from 'react';
import greek_sald from '../assets/image/greek_salad.jpg';
import bruschetta from '../assets/image/bruschetta.jpg';
import lemon from '../assets/image/lemon_desert.jpg';

function Highlights() {
    return (
        <section id="highlights" className="highlights">
            <h2>Weekly Specials</h2>
            <div className="specials-container">
                <div className="special">
                    <div className="dish-image">
                        <img src= {greek_sald} alt="Greek Salad" style={{height : '250px'}}/>
                    </div>
                    <h3>Greek Salad</h3>
                    <p>Fresh salad with cucumbers, tomatoes, olives, and feta cheese.</p>
                    <p>Price: $12</p>
                    <button className="button">Order Online</button>
                </div>
                <div className="special">
                    <div className="dish-image">
                        <img src={bruschetta} alt="Bruschetta" style={{height : '250px'}} />
                    </div>
                    <h3>Bruschetta</h3>
                    <p>Grilled bread garnished with garlic, tomatoes, and basil.</p>
                    <p>Price: $8</p>
                    <button className="button">Order Online</button>
                </div>
                <div className="special">
                    <div className="dish-image">
                        <img src= {lemon} alt="Lemon Dessert"  style={{height : '250px'}}/>
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
