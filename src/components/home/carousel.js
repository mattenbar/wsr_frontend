import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                            <h2>SHOUT-OUTS & </h2>
                        </a>
                    </div>
                </div>
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
                            <h2>CAPITAL CONNECTIONS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="#" >
                            <img src="carouselImages/shoutOuts.png" class="model" />
                            {/* header */}
                            <h2>CAPITAL CONNECTIONS</h2>
                        </a>
                    </div>
                </div>
            
            </Slider>
        </div>
    );
}

export default carousel;