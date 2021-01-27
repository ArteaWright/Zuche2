import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
        <Navigation/>
        <Slider/>
        <h1 className="homeHeader">Something For Everyone</h1>
        <Link to="/shop" className="shopNow">Shop Now &#62;</Link>
        <Footer/>
        </div>
    );
}

export default Home;