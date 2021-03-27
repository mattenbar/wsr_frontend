import React from 'react';
import moment from "moment";

function articleBody(props) {

    let post = props.post
    
    return (
        <>
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
        </>
    );
}

export default articleBody;