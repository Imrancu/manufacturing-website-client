import React from 'react';
import employee from '../../Assets/images/001-employee.png';
import world from '../../Assets/images/002-earth-globe.png';
import quality from '../../Assets/images/003-quality.png';
import InfoCard from './InfoCard';

const BusinessSummery = () => {
    const allInfo = [
        {
            _id: 1,
            title: "Partners Worldwide",
            qty: 33,
            image: world

        },
        {
            _id: 2,
            title: "High Quality Model",
            qty: 87,
            image: quality
        },
        {
            _id: 3,
            title: "Employees Worldwide",
            qty: 22,
            image: employee
        }
    ]
    return (
        <div className='px-20 py-20 bg-primary'>
            <h1 className='mb-10 text-3xl font-semibold text-center uppercase text-white'>Our Credits</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    allInfo.map(info => <InfoCard
                        info={info}
                    />)
                }
            </div>
        </div>
    );
};

export default BusinessSummery;