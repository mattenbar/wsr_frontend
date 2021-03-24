import React from "react";
import { connect } from "react-redux";


function ShoutOut(state) {
    
    if(state.categories.length > 0){
        
        let posts = state.categories[2].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/ShoutOuts.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>SHOUT OUTS AND PUT DOWNS</h1>
                    <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                    <h5>Each month, wealth management professionals anonymously send us the  best and worst examples  of leadership, management and mentoring they’ve experienced in the course  of their careers.</h5>
                </div>
            </div>
        )

    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/ShoutOuts.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>SHOUT OUTS AND PUT DOWNS</h1>
                    <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                    <h5>Each month, wealth management professionals anonymously send us the  best and worst examples  of leadership, management and mentoring they’ve experienced in the course  of their careers.</h5>
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

export default connect(mSTP)(ShoutOut);