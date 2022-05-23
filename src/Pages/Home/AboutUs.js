import React from 'react';
import img from '../../Assets/images/export.jpg';

const AboutUs = () => {
    return (
        <div className='px-20 py-10'>
            <h1 className='text-3xl uppercase font-semibold text-center my-10'>About us</h1>
            <div className='flex md:flex-col sm:flex-col lg:flex-row gap-24 justify-center items-center'>
                <div className='basis-1/2'>
                    <p>As global leading commercial refrigeration manufacturer we pride ourselves on both the products we supply and the levels of customer service we provide.
                    <br />
                    <br />
                    Our international team of dedicated specialists have years of experience in the refrigeration industry, serving export territories from the Bahamas to Bangladesh. To find your closest Foster refpresentative, learn of events we are attending or for any other enquiries, please contact the team for further details.</p>
                </div>
                <div className='basis-1/2 '>
                    <img className='rounded-lg shadow-md' src={img} alt="export" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;