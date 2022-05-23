import React from 'react';
import AboutUs from './AboutUs';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact';
import RefParts from './RefParts';
import Reviews from './Reviews';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <RefParts/>
            <BusinessSummery/>
            <AboutUs/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;