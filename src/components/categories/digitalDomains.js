import React from "react";
import { connect } from "react-redux";

function DigitalDomains(state) {
    
    if(state.categories.length > 0){

        let posts = state.categories[1].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/DigitalDomains.png" alt=""></img></div>
                <div className="category-header">
                    <h1> THE DIGITAL DOMAIN</h1>
                    <h4 className="tagline">Transformative tech leaders in the wealth  management space</h4>
                    <h5>We profile the fintech solutions, strategies and experts who are redefining the how the wealth management industry operates to unlock new  growth opportunities</h5>
                </div>
            </div>
        )
    } else {
        return (
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/DigitalDomains.png" alt=""></img></div>
                <div className="category-header">
                    <h1> THE DIGITAL DOMAIN</h1>
                    <h4 className="tagline">Transformative tech leaders in the wealth  management space</h4>
                    <h5>We profile the fintech solutions, strategies and experts who are redefining the how the wealth management industry operates to unlock new  growth opportunities</h5>
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

export default connect(mSTP)(DigitalDomains);
