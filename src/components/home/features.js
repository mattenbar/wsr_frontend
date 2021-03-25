import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment'

function features(state) {

    
    if (state.features.length > 0) {
        
        let leftFeature = state.features[2]["attributes"]["post"]
        let mainFeature = state.features[1]["attributes"]["post"]
        let rightFeature = state.features[0]["attributes"]["post"]

        return (
            <div className="features">
                <h1>TODAY'S TOP FEATURES</h1>
                <div className="feature-wrapper" >
                    <div className="small-square">
                        <Link to={`/posts/${leftFeature["id"]}`} post_id={leftFeature["id"]}>
                            <img src={leftFeature["image"]} className="feature-images__small" alt="left-image"/>
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} / {moment.parseZone(leftFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="middle-square">
                        <Link to={`/posts/${mainFeature["id"]}`} post_id={mainFeature["id"]} >
                        <img src={mainFeature["image"]} className="feature-images__small" alt="main-image"/>
                            <h2>{mainFeature["title"]}</h2>
                            <p>{mainFeature['author']} / {moment.parseZone(mainFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="small-square">
                        <Link to={`/posts/${rightFeature["id"]}`} post_id={rightFeature["id"]}>
                            <img src={rightFeature["image"]} className="feature-images__small" alt="right-image"/>
                            <h2>{rightFeature["title"]}</h2>
                            <p>{rightFeature['author']} / {moment.parseZone(rightFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        )
    }
    
}

function mSTP(state){
    return {
      features: state.features,
    }
  }

export default connect(mSTP)(features);