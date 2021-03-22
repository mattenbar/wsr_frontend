import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function transactions(props) {

    if (props.posts){

        let posts = props.posts.attributes.posts
        let lastTwoPosts = posts.slice(-2)
        let firstPost = lastTwoPosts[1]
        let secondPost = lastTwoPosts[0]

        return (   
            <div className="trcrsl">
                <h1>TRANSACTIONS & TRANSITIONS</h1>
                <div className="nm-cards" >
                    <div className="ti-carousel-wrapper">
                        <div className="box">
                        <Link to={`/posts/${firstPost.id}`} post_id={firstPost.id} className="ti-a">
                                {/* model */}
                                <img
                                    src={firstPost.image}
                                    className="circular-image"
                                />
                                {/* header */}
                                <h2>{firstPost.title}</h2>
                                <p>by {firstPost.author}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="ti-carousel-wrapper">
                        <div className="box">
                            <Link to={`/posts/${secondPost.id}`} post_id={secondPost.id} className="ti-a">
                                {/* model */}
                                <img
                                    src={secondPost.image}
                                    className="circular-image"
                                />
                                {/* header */}
                                <h2>{secondPost.title}</h2>
                                <p>by {secondPost.author}</p>
                            </Link>
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
