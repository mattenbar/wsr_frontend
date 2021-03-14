import React from "react";
import Slider from "react-slick";

function transactions(props) {
    return (
        <div className="trcrsl">
            <h1>TRANSACTIONS & TRANSITIONS</h1>
            <div className="nm-cards" >
                <div className="ti-carousel-wrapper">
                    <div className="box">
                        <a href="#">
                            {/* model */}
                            <img
                                src="https://i.imgur.com/uBljRiB.jpg"
                                className="circular-image"
                            />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
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
                                className="circular-image"
                            />
                            {/* header */}
                            <h2>Headline Headline Headline</h2>
                            <p>by Author Name</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default transactions;
