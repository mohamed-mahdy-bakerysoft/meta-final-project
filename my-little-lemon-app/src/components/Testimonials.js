import React from 'react';


function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <h2>Customer Testimonials</h2>
            <div className="testimonial-container">
                <div className="testimonial">
                    <p>“Absolutely loved the ambiance and the food was exquisite!”</p>
                    <p className="rating">Rating: 5/5</p>
                </div>
                <div className="testimonial">
                    <p>“A delightful experience with traditional flavors.”</p>
                    <p className="rating">Rating: 4.5/5</p>
                </div>
                <div className="testimonial">
                    <p>“Great service, friendly staff, and delicious dishes!”</p>
                    <p className="rating">Rating: 5/5</p>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
