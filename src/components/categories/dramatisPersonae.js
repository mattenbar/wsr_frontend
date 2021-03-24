import React from 'react';
import { connect } from 'react-redux';

function dramatisPersonae(state) {

    if(state.categories.length > 0){

        let posts = state.categories[1].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/DramatisPersonae.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>DRAMATIS PERSONAE</h1>
                    <h4 className="tagline">Spotlighting  creative and contrarian firms and their leaders</h4>
                    <h5>The most successful stories in wealth management revolve around people and firms willing to stand  out with creative – and sometimes contrarian –  strategies.</h5>
                </div>
            </div>
        )

    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/DramatisPersonae.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>DRAMATIS PERSONAE</h1>
                    <h4 className="tagline">Spotlighting  creative and contrarian firms and their leaders</h4>
                    <h5>The most successful stories in wealth management revolve around people and firms willing to stand  out with creative – and sometimes contrarian –  strategies.</h5>
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

export default connect(mSTP)(dramatisPersonae);