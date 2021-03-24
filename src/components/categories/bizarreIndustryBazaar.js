import React from 'react';
import { connect } from 'react-redux';

function bizarreIndustryBazaar(state) {

    if(state.categories.length > 0){

        let posts = state.categories[15].attributes.posts.reverse()

        return (
            console.log(posts),
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BizarreIndustryBazaar.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BIZARRE INDUSTRY BAZAAR</h1>
                    <h4 className="tagline">The weirder side  of wealth management</h4>
                    <h5>It’s a wild and  weird wealth management industry sometimes – We bring you some of the strangest stories, so you don’t have to experience it directly.</h5>
                </div>
            </div>
        )
    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BizarreIndustryBazaar.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BIZARRE INDUSTRY BAZAAR</h1>
                    <h4 className="tagline">The weirder side  of wealth management</h4>
                    <h5>It’s a wild and  weird wealth management industry sometimes – We bring you some of the strangest stories, so you don’t have to experience it directly.</h5>
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

export default connect(mSTP)(bizarreIndustryBazaar);