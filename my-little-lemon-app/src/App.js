import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import "./app.css";

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </div>
    );
}

export default App;
