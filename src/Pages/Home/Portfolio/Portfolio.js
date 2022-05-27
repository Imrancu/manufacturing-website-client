import React from 'react';

const Portfolio = () => {
    return (
        <div className='flex gap-6 justify-center items-center my-6 px-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl text-center font-semibold my-6'>About Me</h1>
                <div class="avatar mx-auto">
                    <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Jd4YSLy/me-about.jpg" />
                    </div>
                </div>
                <div class="card-body text-center">
                    <p>This is Mohammad Imran. Programming is my dream job that I enjoy so much. I also love to design social media and graphic elements via Adobe Creative softwares. I learnt a lots of new things with Programing-Hero.</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <h1 className='text-2xl text-center font-semibold my-6'>Education</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <td>University of Chittagong</td>
                                <td>Sociology</td>
                                <td>Honors 3rd Year</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="overflow-x-auto">
                    <h1 className='text-2xl text-center font-semibold my-6'>Skills</h1>
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <td>HTML5</td>
                                <td>CSS3</td>
                                <td>Tailwind</td>
                                <td>Javascript</td>
                                <td>ReactJs</td>
                                <td>Mongodb</td>
                                <td>Wordpress</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="overflow-x-auto">
                    <h1 className='text-2xl text-center font-semibold my-6'> MyPortfolio</h1>
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <td><a className='btn btn-outline' href="https://assignment-9-imrancu.netlify.app/">Project One</a></td>
                                <td><a className='btn btn-outline' href="https://portfolio-imrancu.netlify.app/">Project Two</a></td>
                                <td><a className='btn btn-outline' href="https://gym-equipment-13125.web.app/">Project Three</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;