import React, { useState, useEffect } from "react";
import { API_URL } from "../../apiConstants";
import { useSelector, useDispatch } from 'react-redux';
import ArticleBody from './articleBody';
import ArticleHeaders from './articleHeaders';
import ArticleEditForm from './articleEditForm';
import { deletePost } from '../../actions/deletePost';
import { withRouter } from "react-router";

function DramatisPersonaeArticle(props) {
    console.log(props);
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
            console.log("individual post", post.attributes),
            (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <img
                                src="/carouselImages/DramatisPersonae.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>DRAMATIS PERSONAE</h1>
                            <h4 className="tagline">
                                Spotlighting creative and contrarian firms and
                                their leaders
                            </h4>
                            <h5>
                                The most successful stories in wealth management
                                revolve around people and firms willing to stand
                                out with creative – and sometimes contrarian –
                                strategies.
                            </h5>
                        </div>
                    </div>
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
                        <h3 className="individualPostDate">
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
            )
        );
    }
}

export default DramatisPersonaeArticle;
