import React from 'react';
import { Link } from 'react-router-dom';

function features(props) {

    
    if (props.features.length > 0) {
        
        let leftFeature = props.features[0]["attributes"]["post"]
        let mainFeature = props.features[1]["attributes"]["post"]
        let rightFeature = props.features[2]["attributes"]["post"]

        return (
            <div className="features">
                <h1>TODAY'S TOP FEATURES</h1>
                <div className="feature-wrapper" >
                    <div className="small-square">
                        <Link to={`/posts/${leftFeature["id"]}`} post_id={leftFeature["id"]}>
                            <img src={leftFeature["image"]} className="feature-images__small" alt="left-image"/>
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} / {leftFeature['created_at']}</p>
                        </Link>
                    </div>
                    <div className="middle-square">
                        <Link to={`/posts/${mainFeature["id"]}`} post_id={mainFeature["id"]} >
                        <img src={mainFeature["image"]} className="feature-images__small" alt="main-image"/>
                            <h2>{mainFeature["title"]}</h2>
                            <p>{mainFeature['author']} / {mainFeature['created_at']}</p>
                        </Link>
                    </div>
                    <div className="small-square">
                        <Link to={`/posts/${rightFeature["id"]}`} post_id={rightFeature["id"]}>
                            <img src={rightFeature["image"]} className="feature-images__small" alt="right-image"/>
                            <h2>{rightFeature["title"]}</h2>
                            <p>{rightFeature['author']} / {rightFeature['created_at']}</p>
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

export default features;