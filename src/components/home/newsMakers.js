import React from "react";
import Slider from "react-slick";

function newsMakers(props) {
    return (
        <div className="nm-carousel">
            <h1>NEWSMAKERS ROUNDUP</h1>
            <div className="nm-cards" >
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
            </div>
        </div>
    );
}

export default newsMakers;
