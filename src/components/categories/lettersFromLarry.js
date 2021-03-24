import React from "react";
import { connect } from 'react-redux';

function LettersFromLarry(state) {

    if(state.categories.length > 0){
        debugger
        let posts = state.categories[10].attributes.posts.reverse()

        return (
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/LettersFromLarry.png" alt=""></img></div>
                <div className="category-header">
                    <h1>
                        letters from larry
                    </h1>
                    <h4 className="tagline">Key trends defining wealth management</h4>
                    <h5>Larry Roth’s shares his latest thoughts  on what’s shaping the wealth management space now and in the future.</h5>
                </div>
            </div>
        );
    } else {
        return (
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/LettersFromLarry.png" alt=""></img></div>
                <div className="category-header">
                    <h1>
                        letters from larry
                    </h1>
                    <h4 className="tagline">Key trends defining wealth management</h4>
                    <h5>Larry Roth’s shares his latest thoughts  on what’s shaping the wealth management space now and in the future.</h5>
                </div>
            </div>
        );
    }


}

function mSTP(state){
    return {
      categories: state.categories,
      user: state.user
      
    }
  }

export default connect(mSTP)(LettersFromLarry);