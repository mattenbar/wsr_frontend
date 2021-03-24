import React from "react";
import { connect } from "react-redux";


function Nightmare(state) {
    
    if(state.categories.length > 0){
        
        let posts = state.categories[5].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="/carouselImages/NightmareOnCompSt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>NIGHTMARE ON COMPLIANCE ST </h1>
                    <h4 className="tagline">Your biggest compliance worries addressed</h4>
                    <h5>What are the biggest compliance questions that aren’t easily answered and keep you up at night? Industry-leading compliance expert Sander Ressler answers your anonymous questions.</h5>
                </div>
            </div>
        )

    } else {

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="/carouselImages/NightmareOnCompSt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>NIGHTMARE ON COMPLIANCE ST </h1>
                    <h4 className="tagline">Your biggest compliance worries addressed</h4>
                    <h5>What are the biggest compliance questions that aren’t easily answered and keep you up at night? Industry-leading compliance expert Sander Ressler answers your anonymous questions.</h5>
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

export default connect(mSTP)(Nightmare);