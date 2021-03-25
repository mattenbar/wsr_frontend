import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function thisIssue(state, props) {
    let settings = {
        arrows: true,
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




    if(state.posts.length > 0){

        let lastFive = state.posts.slice(-5)
        let cItems = lastFive.map(post => {
            return(
                <div key={post.attributes.id} className="ticrslwrapper" >
                        <div className="ti-box">
                            <Link to={{    
                                pathname: `/This-Issue/${post.id}`,
                                state: {
                                    category: post.attributes.category_id
                                }
                            }} className="ti-a" > 
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
                <h1>THIS ISSUE</h1>
                <Slider {...settings} >
                    {cItems}
    
                </Slider>
            </div>
        );
        
    } else {
        return(<div></div>)
    }

    
}

function mSTP(state){
    return {
      post: state.posts,
      user: state.user
    }
  }

export default connect(mSTP)(thisIssue);