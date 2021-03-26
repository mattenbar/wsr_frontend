import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {getSlug} from '../../actions/getSlug'
import moment from "moment";

function Features(state) {
    
    if (state.features.length > 0) {
        
        let leftFeature = state.features[2]["attributes"]["post"]
        let mainFeature = state.features[1]["attributes"]["post"]
        let rightFeature = state.features[0]["attributes"]["post"]
        return (
            // state.features[0].attributes.post.category_id
            console.log("features", state.features[0].attributes.post.category_id),
            <div className="features">
                <h1>TODAY'S TOP FEATURES</h1>
                <div className="feature-wrapper" >
                    <div className="small-square">
                        <Link to={{    
                            pathname: `${getSlug(leftFeature)}/${leftFeature["id"]}`,
                            state: {
                                category: state.features[0].attributes.post.category_id
                            }
                        }} > 
                            <img src={leftFeature["image"]} className="feature-images__small" alt="left-image"/>
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} &nbsp; {moment.parseZone(leftFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="middle-square">
                        <Link to={{    
                            pathname: `${getSlug(mainFeature)}/${mainFeature["id"]}`,
                            state: {
                                category: state.features[1].attributes.post.category_id
                            }
                        }} > 
                        <img src={mainFeature["image"]} className="feature-images__small" alt="main-image"/>
                            <h2>{mainFeature["title"]}</h2>
                            <p>{mainFeature['author']} &nbsp; {moment.parseZone(mainFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="small-square">
                        <Link to={{    
                            pathname: `${getSlug(rightFeature)}/${rightFeature["id"]}`,
                            state: {
                                category: state.features[2].attributes.post.category_id
                            }
                        }} > 
                            <img src={rightFeature["image"]} className="feature-images__small" alt="right-image"/>
                            <h2>{rightFeature["title"]}</h2>
                            <p>{rightFeature['author']} &nbsp; {moment.parseZone(rightFeature['created_at']).format("MMMM DD, YYYY")}</p>
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

export default connect(mSTP)(Features);