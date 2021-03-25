import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import Pathname from '../articles/pathname';
import moment from 'moment'


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
                            // pathname: <Pathname category={state.features[0].attributes.post.category_id} leftFeature={leftFeature}/>,
                            state: {
                                category: state.features[0].attributes.post.category_id
                            }
                        }} > 
                            <img src={leftFeature["image"]} className="feature-images__small" alt="left-image"/>
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} / {moment.parseZone(leftFeature['created_at']).format("MMMM DD, YYYY")}</p>
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
                            <p>{mainFeature['author']} / {moment.parseZone(mainFeature['created_at']).format("MMMM DD, YYYY")}</p>
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

function getSlug(post){
    switch (post.category_id) {
        case 1:  
            return '/Capital-Connections'
        case 2:  
            return '/The-Digital-Domain'
        case 3:  
            return '/Beltway-And-Beyond'
        case 4:  
            return '/Shout-Outs-And-Put-Downs'
        case 5:  
            return '/People-Moves'
        case 6:  
            return '/Nightmare-On-Compliance-St'
        case 7:  
            return '/Buy-It-Or-Build-It'
        case 8:  
            return '/Wallet-Share'
        case 9:  
            return '/CyberCrypt-Tales'
        case 10:  
            return '/On-The-Rise'
        case 11:  
            return '/Letters-From-Larry'
        case 12:  
            return '/Dramatis-Personae'
        case 13:  
            return '/NewsMakers-Roundup'
        case 14:  
            return '/Transactions-And-Transitions'
        case 15:  
            return '/Cast-And-Crew'
        case 16:  
            return '/Bizarre-Industry-Bazaar'
        case 17:  
            return '/Investment-Solutions-and-Gatekeepers'

        default:
            return '/';
          }
}

function mSTP(state){
    return {
      features: state.features,
    }
  }

export default connect(mSTP)(Features);