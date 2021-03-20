import React from "react";
import Slider from "react-slick";

function newsMakers(props) {

    if (props.posts){

        let posts = props.posts.attributes.posts.reverse()
        let firstPost = posts[0]
        let secondPost = posts[1]

        return (
            console.log("in newsmakers - ", firstPost),
            
            <div className="nmcrsl">
                <h1>NEWSMAKERS ROUNDUP</h1>
                <div className="nm-cards" >
                    <div className="ti-carousel-wrapper">
                        <div className="box">
                            <a href="#">
                                {/* model */}
                                <img 
                                    // src="https://i.imgur.com/uBljRiB.jpg"
                                    src={firstPost.image}
                                    className="circular-image"
                                />
                                {/* header */}
                                <h2>{firstPost.title}</h2>
                                <p>by c</p>
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
    } else {
        return(
            <div>

            </div>
        )
    }
    
}

export default newsMakers;
