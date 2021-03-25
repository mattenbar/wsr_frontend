import React, { useState, useEffect } from "react";
import { API_URL } from "../../apiConstants";
import moment from "moment";

function CapitalConnectionArticle(props) {
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
                                src="/carouselImages/CapitolConnections.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>CAPITAL CONNECTIONS</h1>
                            <h4 className="tagline">
                                How wealth management firms and sources of
                                private capital drive growth together
                            </h4>
                            <h5>
                                We spotlight private equity, venture capital or
                                SPAC leaders focused on wealth management
                                acquisitions, or executives from wealth
                                management firms owned by sources of private
                                capital. Here’s what to look for – And where to
                                watch out.
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
                        <h3 className="inidvidualPostDate">
                            {moment
                                .parseZone(post.attributes.created_at)
                                .format("MMMM DD, YYYY")}
                        </h3>
                        <p className="inidvidualPostContent" dangerouslySetInnerHTML={{ __html: post.attributes.content }}></p>
                        {/* <div className="socialShare">
                        <h3>share</h3>
                    </div> */}
                    </div>
                </>
            )
        );
    }
}

export default CapitalConnectionArticle;
