import React from "react";
import { connect } from "react-redux";


function TransactionsAndTransitions(state) {

    if(state.categories.length > 0){
        
        let posts = state.categories[13].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/Transactions&Trans.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>TRANSACTIONS & TRANSITIONS</h1>
                    <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                    <h5>DESCRIPTOR WILL GO HERE.</h5>
                </div>
            </div>
        )

    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/Transactions&Trans.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>TRANSACTIONS & TRANSITIONS</h1>
                    <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                    <h5>DESCRIPTOR WILL GO HERE.</h5>
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

export default connect(mSTP)(TransactionsAndTransitions);