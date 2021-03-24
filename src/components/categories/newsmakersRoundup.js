import React from "react";
import { connect } from "react-redux";


function NewsmakersRoundup(state) {
    
    if(state.categories.length > 0){
        
        let posts = state.categories[12].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
        
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/NewsMakersRoundUp.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>NEWSMAKERS ROUNDUP</h1>
                    <h4 className="tagline">Top news condensed from top wealth management media outlets</h4>
                    <h5>Notes from Larry:  I’ve assembled my personal picks of top news stories from media  outlets covering the wealth management space – And why you should care.</h5>
                </div>
            </div>
        )

    } else {
        return (
        
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/NewsMakersRoundUp.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>NEWSMAKERS ROUNDUP</h1>
                    <h4 className="tagline">Top news condensed from top wealth management media outlets</h4>
                    <h5>Notes from Larry:  I’ve assembled my personal picks of top news stories from media  outlets covering the wealth management space – And why you should care.</h5>
                </div>
            </div>
        )
    }

    
}

function mSTP(state){
    return {
      categories: state.categories,
      user: state.user
    }
  }

export default connect(mSTP)(NewsmakersRoundup);