import React from 'react';
import AboutUs from './AboutUs';
import BusinessSummery from './BusinessSummery';
import RefParts from './RefParts';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <RefParts/>
            <BusinessSummery/>
            <AboutUs/>
        </div>
    );
};

export default Home;