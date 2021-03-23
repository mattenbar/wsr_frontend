import React, { useState, useEffect } from 'react';
import {API_URL} from '../../apiConstants';
import moment from 'moment';

function IndivualPosts(props) {
    console.log(props)
    const post_id = props.match.params.id

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(API_URL + `/posts/${post_id}`)
        .then(res => res.json())
        .then(data => {
            setPost(data.post.data)
        })
    }, [])

    if (post.attributes === undefined){
        return (
            console.log("individual post", post),
            <div>
                <h1>LOADING...</h1>
            </div>
        );
    } else {
        // debugger
        return (
            console.log("individual post", post.attributes),
            <>
            <div className="category-show">
            <div className="category-image"><img src="/carouselImages/CapitolConnections.png" alt="category-image"></img></div>
            <div className="category-header">
                <h1>
                    CAPITAL 
                    <br/>
                    CONNECTIONS
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
        </div>
            <div className="individualPostDiv">
                    <img src={post.attributes.image} alt="post-image" className="individualPostImage" />
                    <h2 className="individualPostTitle">{post.attributes.title}</h2>
                    <h3 className="individualPostAuthor">BY {post.attributes.author}</h3>
                    <h3 className="inidvidualPostDate">
                        {moment
                            .parseZone(post.attributes.created_at)
                            .format("MMMM DD, YYYY")
                        }
                    </h3>
                    <p className="inidvidualPostContent">{post.attributes.content}</p>
                    {/* <div className="socialShare">
                        <h3>share</h3>
                    </div> */}
            </div>
        
            </>
        )
    }
}

export default IndivualPosts;