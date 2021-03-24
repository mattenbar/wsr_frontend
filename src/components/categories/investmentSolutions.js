import React from 'react';
import { connect } from 'react-redux';

function investmentSolutions(state) {

    if(state.categories.length > 0){
       

        let posts = state.categories[16].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/InvestmentSolutions&Gatekeepers.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1> INVESTMENT SOLUTIONS & GATEKEEPERS</h1>
                    <h4 className="tagline">Innovative investment solutions and  gatekeepers</h4>
                    <h5>Third-party asset  managers need to know  what IBD and RIA gatekeepers are seeking.  Gatekeepers want to know about third-party asset managers that can  drove value for financial  advisors. We connect these two vital audiences.</h5>
                </div>
            </div>
        )

    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/InvestmentSolutions&Gatekeepers.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1> INVESTMENT SOLUTIONS & GATEKEEPERS</h1>
                    <h4 className="tagline">Innovative investment solutions and  gatekeepers</h4>
                    <h5>Third-party asset  managers need to know  what IBD and RIA gatekeepers are seeking.  Gatekeepers want to know about third-party asset managers that can  drove value for financial  advisors. We connect these two vital audiences.</h5>
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

export default connect(mSTP)(investmentSolutions);