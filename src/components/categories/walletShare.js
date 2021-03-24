import React from "react";
import { connect } from "react-redux";


function WalletShare(state) {

    if(state.categories.length > 0){
        
        let posts = state.categories[7].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (

            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/WalletShare.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>WALLET SHARE</h1>
                    <h4 className="tagline">Sales, marketing  and communications strategies and leaders</h4>
                    <h5>Actionable tips and strategies from sales,  marketing and communications leaders  on how to stand out from  the crowd to generate increased growth.</h5>
                </div>
            </div>
        )

    } else {
        return (

            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/WalletShare.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>WALLET SHARE</h1>
                    <h4 className="tagline">Sales, marketing  and communications strategies and leaders</h4>
                    <h5>Actionable tips and strategies from sales,  marketing and communications leaders  on how to stand out from  the crowd to generate increased growth.</h5>
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

export default connect(mSTP)(WalletShare);