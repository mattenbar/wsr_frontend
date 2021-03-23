import React from "react";
import moment from 'moment';

function CapitalConnections(props) {
    
    if (props.posts.length > 0){

        //loads post in order of newest to oldest
        let categoryPosts = props.posts[0]["attributes"]["posts"].reverse()
        let newestPost = categoryPosts[0]
        let secondNewestPost = categoryPosts[1]
        
        
        return (
            console.log("category", newestPost),
            <>
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
            <div className="categoryTopTwo">
            <div className="categoryTopLeft">
                {/* Link to= */}
                    <img src={newestPost.image} alt={newestPost.title} />
                    <h2 className="newestPostHeader">{newestPost.title}</h2>
                    <h3 className="lightblueAuthor">{newestPost.author}</h3>
                    <h3 className="inidvidualPostDate">
                        {moment
                            .parseZone(newestPost.created_at)
                            .format("MMMM DD, YYYY")
                        }
                    </h3>
            </div>
            <div className="categoryTopRight">
            <img src={secondNewestPost.image} alt={secondNewestPost.title} />
            </div>
        </div>
        <div className="categoryRemainingArticles" >

        </div>
        </>
        );
    } else { return (<div></div>) }
}

export default CapitalConnections;