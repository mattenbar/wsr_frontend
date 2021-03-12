import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function newsMakers(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img class='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img class='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <div className="nm-carousel">
            <h1>NEWSMAKERS ROUNDUP</h1>
            <Slider {...settings}>
                <div className="ti-carousel-wrapper">
                    <div className="box">
                        <a href="#">
                            {/* model */}
                            <img
                                src="https://i.imgur.com/uBljRiB.jpg"
                                class="circular-image"
                            />
                            {/* header */}
                            <p>Headline Headline Headline</p>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ti-carousel-wrapper">
                    <div className="box">
                        <a href="#">
                            {/* model */}
                            <img
                                src="https://i.imgur.com/uBljRiB.jpg"
                                class="circular-image"
                            />
                            {/* header */}
                            <p>Headline Headline Headline</p>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ti-carousel-wrapper">
                    <div className="box">
                        <a href="#">
                            {/* model */}
                            <img
                                src="https://i.imgur.com/uBljRiB.jpg"
                                class="circular-image"
                            />
                            {/* header */}
                            <p>Headline Headline Headline</p>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
                <div className="ti-carousel-wrapper">
                    <div className="box">
                        <a href="#">
                            {/* model */}
                            <img
                                src="https://i.imgur.com/uBljRiB.jpg"
                                class="circular-image"
                            />
                            {/* header */}
                            <p>Headline Headline Headline</p>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default newsMakers;
