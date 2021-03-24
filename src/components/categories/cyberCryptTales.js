import React from 'react';
import { connect } from 'react-redux';

function cyberCryptTales(state) {

    if(state.categories.length > 0){

        let posts = state.categories[8].attributes.posts.reverse()
        let newestPost = posts[0]
        let secondNewestPost = posts[1]

        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/CryptTales.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>CYBERCRRYPT TALES</h1>
                    <h4 className="tagline"> Keeping you  ahead of the curve on cybersecurity</h4>
                    <h5>Industry-leading  cybersecurity expert Sid Yenamandra answers your anonymous questions that are keeping you up at night.</h5>
                </div>
            </div>
        )

    } else {
        return (
            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/CryptTales.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>CYBERCRRYPT TALES</h1>
                    <h4 className="tagline"> Keeping you  ahead of the curve on cybersecurity</h4>
                    <h5>Industry-leading  cybersecurity expert Sid Yenamandra answers your anonymous questions that are keeping you up at night.</h5>
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

export default connect(mSTP)(cyberCryptTales);