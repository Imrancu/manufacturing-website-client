import React from 'react';
import AboutUs from './AboutUs';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact';
import Products from './Products';
import Reviews from './Reviews';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Products/>
            <BusinessSummery/>
            <AboutUs/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;