import React from 'react';

const Slider = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://www.fosterrefrigerator.com/images/media/sliders/en/foster-ref-experts-plain.jpg" class="w-full" alt='banner' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://www.fosterrefrigerator.com/images/media/sliders/en/hiresfoster2511-web-banner-crop-4.jpg" class="w-full" alt='banner' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://www.fosterrefrigerator.com/images/media/sliders/en/2488-jobs-web-banner-c.jpg" class="w-full" alt='banner' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://www.fosterrefrigerator.com/images/media/sliders/en/ark2239-foster-g3-launch-web-banner.jpg" class="w-full" alt='banner' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;