import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

function newsMakers(state) {

    if (state.categories.length > 0){

        let posts = state.categories[0].attributes.posts
        let lastTwoPosts = posts.slice(-2)
        let firstPost = lastTwoPosts[1]
        let secondPost = lastTwoPosts[0]

        if (posts.length > 0){
            return (
                <div className="trcrsl">
                    <h1>CAPITAL CONNECTIONS</h1>
                    <div className="nm-cards" >
                        <div className="ti-carousel-wrapper">
                            <div className="box">
                            <Link to={`/Capital-Connections/${firstPost.id}`} post_id={firstPost.id} className="ti-a">
                                    {/* model */}
                                    <img
                                        alt="first post"
                                        src={firstPost.image}
                                        className="circular-image"
                                    />
                                    {/* header */}
                                    <h2>{firstPost.title}</h2>
                                    <p>{firstPost.author}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="ti-carousel-wrapper">
                            <div className="box">
                                <Link to={`/Capital-Connections/${secondPost.id}`} post_id={secondPost.id} className="ti-a">
                                    {/* model */}
                                    <img
                                        alt=""
                                        src={secondPost.image}
                                        className="circular-image"
                                    />
                                    {/* header */}
                                    <h2>{secondPost.title}</h2>
                                    <p>{secondPost.author}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <>
                    <div className="trcrsl">
                        <h1>CAPITAL CONNECTIONS</h1>
                        <div  >
                            <h1 className="comingSoon" >COMING SOON</h1>
                        </div>
                    </div>
                </>)
        }
    }else{
        return(
            <div>

            </div>
        )
    }
}

function mSTP(state){
    return {
      categories: state.categories,
    }
  }

export default connect(mSTP)(newsMakers);

