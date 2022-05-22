import React from 'react';
import BusinessSummery from './BusinessSummery';
import RefParts from './RefParts';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <RefParts/>
            <BusinessSummery/>
        </div>
    );
};

export default Home;