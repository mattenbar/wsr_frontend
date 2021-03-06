import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {GetSlug} from '../../actions/getSlug'
import moment from "moment";

function Features(state) {
    
    if (state.features.length > 0) {
        let leftFeature = state.features[0]["attributes"]["post"]
        let mainFeature = state.features[1]["attributes"]["post"]
        let rightFeature = state.features[2]["attributes"]["post"]

        return (
            <div className="features">
                <h1>TOP FEATURES</h1>
                <div className="feature-wrapper" >
                    <div className="small-square">
                        <Link to={{    
                            pathname: `${GetSlug(leftFeature)}/${leftFeature["id"]}`,
                            state: {
                                category: state.features[0].attributes.post.category_id
                            }
                        }} > 
                            <img src={leftFeature["image"]} className="feature-images__small" alt=""/>
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} &nbsp; {moment.parseZone(leftFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="middle-square">
                        <Link to={{    
                            pathname: `${GetSlug(mainFeature)}/${mainFeature["id"]}`,
                            state: {
                                category: state.features[1].attributes.post.category_id
                            }
                        }} > 
                        <img src={mainFeature["image"]} className="feature-images__small" alt=""/>
                            <h2>{mainFeature["title"]}</h2>
                            <p>{mainFeature['author']} &nbsp; {moment.parseZone(mainFeature['created_at']).format("MMMM DD, YYYY")}</p>
                        </Link>
                    </div>
                    <div className="small-square">
                        <Link to={{    
                            pathname: `${GetSlug(rightFeature)}/${rightFeature["id"]}`,
                            state: {
                                category: state.features[2].attributes.post.category_id
                            }
                        }} > 
                            <img src={rightFeature["image"]} className="feature-images__small" alt=""/>
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