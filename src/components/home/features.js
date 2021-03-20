import React, { Component } from 'react';

function features(props) {

    
    if (props.features.length > 0) {
        console.log(props.features[1]["attributes"])
        let leftFeature = props.features[0]["attributes"]["post"]
        let mainFeature = props.features[1]["attributes"]["post"]
        let rightFeature = props.features[2]["attributes"]["post"]

        return (
            <div className="features">
                <h1>TODAY'S TOP FEATURES</h1>
                <div className="feature-wrapper" >
                    <div className="small-square">
                        <a href="#" >
                            <img src={leftFeature["image"]} className="feature-images__small" />
                            <h2>{leftFeature["title"]}</h2>
                            <p>{leftFeature['author']} / {leftFeature['created_at']}</p>
                        </a>
                    </div>
                    <div className="middle-square">
                        <a href="#" >
                        <img src={mainFeature["image"]} className="feature-images__small" />
                            <h2>{mainFeature["title"]}</h2>
                            <p>{mainFeature['author']} / {mainFeature['created_at']}</p>
                        </a>
                    </div>
                    <div className="small-square">
                        <a href="#" >
                            <img src={rightFeature["image"]} className="feature-images__small" />
                            <h2>{rightFeature["title"]}</h2>
                            <p>{rightFeature['author']} / {rightFeature['created_at']}</p>
                        </a>
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