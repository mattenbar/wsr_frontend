import React from "react";
import Slider from "react-slick";

function transactions(props) {

    if (props.posts){

        let posts = props.posts.attributes.posts.reverse()
        let firstPost = posts[0]
        let secondPost = posts[1]

        return (   
            <div className="trcrsl">
                <h1>TRANSACTIONS & TRANSITIONS</h1>
                <div className="nm-cards" >
                    <div className="ti-carousel-wrapper">
                        <div className="box">
                            <a href="#">
                                {/* model */}
                                <img
                                    src={firstPost.image}
                                    className="circular-image"
                                />
                                {/* header */}
                                <h2>{firstPost.title}</h2>
                                <p>by {firstPost.author}</p>
                            </a>
                        </div>
                    </div>
                    <div className="ti-carousel-wrapper">
                        <div className="box">
                            <a href="#">
                                {/* model */}
                                <img
                                    src={secondPost.image}
                                    className="circular-image"
                                />
                                {/* header */}
                                <h2>{secondPost.title}</h2>
                                <p>by {secondPost.author}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>

            </div>
        )
    }
}

export default transactions;
