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
                        CAPITAL CONNECTIONS
                    </h1>
                    <h4 className="tagline">How wealth management firms and  sources of private capital  drive growth together</h4>
                    <h5>We spotlight private equity, venture capital or SPAC leaders  focused on wealth management acquisitions, or executives from wealth management firms owned by sources of private capital. Here’s what to look for – And where to watch out.</h5>
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