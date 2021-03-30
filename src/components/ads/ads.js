import React from 'react';
import { connect } from 'react-redux';

function ads(state) {


    if(state.showads.length > 0){

        let leftAd = state.showads[0].attributes.ad
        let rightAd = state.showads[1].attributes.ad

        return (
            console.log("left ad -", leftAd),
            <div className="main-bottom-ads">
                <span className="span-ad-image1"><a href={leftAd.link} target="_blank"><img className="ad-image1" src={leftAd.image} alt="ad-1" /></a></span>
                <span className="span-ad-image2"><a href={rightAd.link} target="_blank"><img className="ad-image1" src={rightAd.image} alt="ad-2" /></a></span>
            </div>
        );
    } else {
        return (
            <div className="main-bottom-ads">
                <span className="span-ad-image1"><img className="ad-image1" src='/ad1.jpg' alt="ad-1" /></span>
                <span className="span-ad-image2"><img className="ad-image1" src='/ad1.jpg' alt="ad-2" /></span>
            </div>
        )
    }
    
}

function mSTP(state){
    return {
      showads: state.showads 
    }
  }


export default connect(mSTP)(ads);