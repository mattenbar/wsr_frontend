import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function thisIssue(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img className='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img className='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
        dots: false,
        infinite: true, 
        speed: 500,
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
                        slidesToScroll: 3
                    }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                }

            ]
    }
    return (
        <div className="ticrsl" >
            <h1>THIS ISSUE</h1>
            <Slider {...settings} >
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ticrslwrapper" >
                    <div className="ti-box">
                        <a href="#" className="ti-a">
                            {/* model */}
                            <img src="https://i.imgur.com/uBljRiB.jpg" className="circular-image" />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default thisIssue;