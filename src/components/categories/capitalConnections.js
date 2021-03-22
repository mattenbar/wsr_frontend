import React from "react";


function CapitalConnections(props) {
    
    if (props.posts.length > 0){

        //loads post in order of newest to oldest
        let categoryPosts = props.posts[0]["attributes"]["posts"].reverse()
        
        return (
             
            // console.log("reversed - ", categoryPosts ),
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/CapitolConnections.png" alt=""></img></div>
                <div className="category-header">
                    <h1>
                        CAPITAL 
                        <br/>
                        CONNECTIONS
                    </h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
                </div>
            </div>
        );
    } else { return (<div></div>) }
}

export default CapitalConnections;