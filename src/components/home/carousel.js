import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import PointCounterpointIcon from './icons/PointCounterPoint.png'
import BeltwayAndBeyond from './icons/Beltway&Beyond.png'
import BuyItorBuildIt from './icons/BuyItOrBuildIt.png'

function carousel(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img class='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img class='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
        dots: false,
        infinite: true, 
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                }

            ]
    }
    return (
        <div className="carousel-top" >
            <Slider {...settings} >
            
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="#" >
                            {/* model */}
                            <img src="carouselImages/pointCounterpoint.png" class="model" />
                            {/* header */}
                            <h2>POINT-COUNTERPOINT</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/capitalConnections.png" class="model" />
                            {/* header */}
                            <h2>CAPITAL CONNECTIONS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/digitalDomain.png" class="model" />
                            {/* header */}
                            <h2>DIGITAL DOMAINS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>SHOUT-OUTS & PUT DOWNS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="#" >
                            {/* model */}
                            <img src="carouselImages/pointCounterpoint.png" class="model" />
                            {/* header */}
                            <h2>BELTWAY AND BEYOND</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/capitalConnections.png" class="model" />
                            {/* header */}
                            <h2>LAWYER LAND</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/digitalDomain.png" class="model" />
                            {/* header */}
                            <h2>NIGHTMARE ON COMPLIANCE ST</h2>
                        </a>
                    </div>
                </div>
                
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>BUY IT OR BUILD IT?</h2>
                        </a>
                    </div>
                </div>
                
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>WALLET SHARE</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>FAMILY FEUDS</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>PRODUCT STRATEGIES</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>LETTERS FROM LARRY</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>NOTEWORTHY NOTES</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>NEWSMAKERS ROUNDUP</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>TRANSACTIONS AND TRANSITIONS</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>FROM OUR PARTNERS</h2>
                        </a>
                    </div>
                </div>
            
            </Slider>
        </div>
    );
}

export default carousel;