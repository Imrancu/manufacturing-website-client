import React from 'react';

const Contact = () => {
    return (
        <div class="flex flex-row gap-10 px-20">
            <div className='basis-2/6 flex bg-primary rounded-xl p-5 shadow-2xl justify-center items-center'>
                <div>
                    <h1 className='text-3xl font-semibold my-5 text-white'>Dedicated Customer Teams & An Agile Services</h1>
                    <p className='my-5 text-white'>
                        <small>Dedicated Customer Teams & An Agile Services
                            Our worldwide presence ensures the timeliness, cost efficiency and compliance adherence required to ensure your production timelines are met.</small>
                    </p>
                    <button class="btn btn-outline">Download Brochure</button>
                </div>
            </div>
            <div className='basis-4/6 shadow-2xl p-5'>
                <div>
                    <h1 className='text-3xl font-semibold my-5'>Request A Quote</h1>
                    <p className='mb-5'>
                        <small>Complete control over products allows us to ensure our customers receive the best quality prices and service. We take great pride in everything that we do in our factory.</small>
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder="Name" class="input input-bordered w-full" />
                    <input type="text" placeholder="Email" class="input input-bordered w-full" />
                    <input type="text" placeholder="Phone" class="input input-bordered w-full" />
                    <input type="text" placeholder="Address" class="input input-bordered w-full" />

                </div>
                <textarea class="textarea textarea-bordered w-full my-4" placeholder="Your Message"></textarea>
                <button class="btn btn-primary">Button</button>
            </div>
        </div>
    );
};

export default Contact;