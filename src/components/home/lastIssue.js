import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function lastIssue(props) {
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
    };


    if(props.posts.length > 0){

        let cItems = props.posts.map(post => {
            return(
                <div key={post.attributes.id} className="ticrslwrapper" >
                    {console.log(post.id)}
                        <div className="ti-box">
                            <Link to={`/posts/${post.id}`} post_id={post.id} className="ti-a">
                                {/* model */}
                                <img src={post.attributes.image} className="circular-image" />
                                {/* header */}
                                <h2>{post.attributes.title}</h2>
                                <p>by {post.attributes.author}</p>
                            </Link>
                        </div>
                    </div>
            )
        })

        return (
            <div className="ticrsl" >
                <h1>LAST ISSUE</h1>
                <Slider {...settings} >
                    {cItems}
    
                </Slider>
            </div>
        );
        
    } else {
        return(<div></div>)
    }

    
}


export default lastIssue;
