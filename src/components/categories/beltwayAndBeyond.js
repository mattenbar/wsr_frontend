import React from "react";
import { connect } from "react-redux";


function Beltway(state) {
    
    if(state.categories.length > 0){

        let posts = state.categories[3].attributes.posts.reverse()
        
        return (
            // posts has actual articles now not just the post id - posts[number]["attributes"] gets the post
            console.log(posts), 
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/Beltway&Beyond.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BELTWAY AND BEYOND</h1>
                    <h4 className="tagline">Keeping you up  to speed on key regulatory and legislative  trends</h4>
                    <h5>Keeping wealth  management firms and  other industry participants  aware of the most important legislative and  regulatory trends – And  how to stay ahead of the  curve.</h5>
                </div>
            </div>
        )

    } else {
        return (
            // posts has actual articles now not just the post id - posts[number]["attributes"] gets the post
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/Beltway&Beyond.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BELTWAY AND BEYOND</h1>
                    <h4 className="tagline">Keeping you up  to speed on key regulatory and legislative  trends</h4>
                    <h5>Keeping wealth  management firms and  other industry participants  aware of the most important legislative and  regulatory trends – And  how to stay ahead of the  curve.</h5>
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

export default connect(mSTP)(Beltway);