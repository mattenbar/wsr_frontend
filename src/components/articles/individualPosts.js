import React, { useState, useEffect } from "react";
import { API_URL } from "../../apiConstants";
import { useSelector, useDispatch } from 'react-redux';
import ArticleBody from './articleBody';
import ArticleHeaders from './articleHeaders';
import ArticleEditForm from './articleEditForm';
import { deletePost } from '../../actions/deletePost';
import { withRouter } from "react-router";

import { Link, useLocation } from "react-router-dom";

function IndivualPosts(props) {
    let location = useLocation();
    console.log("location", location);

    console.log("ip", props);

    const post_id = props.match.params.id;

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(API_URL + `/posts/${post_id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post.data);
            });
    }, []);

    if (post.attributes === undefined) {
        return (
            console.log("individual post", post),
            (
                <div>
                    <h1>LOADING...</h1>
                </div>
            )
        );
    } else {
        // debugger
        
        return (
            <>
                <ArticleHeader category={location.state.category} />
                <div className="individualPostDiv">
                    <img
                        src={post.attributes.image}
                        alt="post-image"
                        className="individualPostImage"
                    />
                    <h2 className="individualPostTitle">
                        {post.attributes.title}
                    </h2>
                    <h3 className="individualPostAuthor">
                        BY {post.attributes.author}
                    </h3>
                    <h3 className="inidvidualPostDate">
                        {moment
                            .parseZone(post.attributes.created_at)
                            .format("MMMM DD, YYYY")}
                    </h3>

                    <p className="individualPostContent" dangerouslySetInnerHTML={{ __html: post.attributes.content }}></p>
                    {/* <div className="socialShare">
                    <h3>share</h3>
                </div> */}
                </div>
            </>
        );
    }
}

export default IndivualPosts;
