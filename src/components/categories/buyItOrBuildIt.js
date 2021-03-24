import React from "react";
import { connect } from 'react-redux';
import { API_URL } from '../../apiConstants';

function BuyItOrBuildIt(state) {
    
    if(state.categories.length > 0){

        let posts = state.categories[10].attributes.posts.reverse()
        
        return (
            console.log(posts),
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
                </div>
            </div>
        );

    } else {
        return (
        
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
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

export default connect(mSTP)(BuyItOrBuildIt);