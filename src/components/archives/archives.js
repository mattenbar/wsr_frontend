import React from "react";
import { connect } from "react-redux";
import { GetSlug } from "../../actions/getSlug";
import { Link } from "react-router-dom";
import moment from "moment";

function archives(state) {

    // why doesn't this always work? -->
    // let reversedPosts = state.posts.reverse()
    // let posts = reversedPosts.map((post) => {
        let posts = state.posts.map((post) => {
        return (
            <div className="pointcpLinksList">
                <li>
                    <Link
                        to={{
                            pathname: `${GetSlug(post.attributes)}/${post.id}`,
                        }}
                        className="pointcpLinks"
                    >
                        <span>{post.attributes.title}</span>
                        <span>&nbsp;</span>
                        <span>- by {post.attributes.author}</span>
                            <span>&nbsp;</span>
                            <span>| {moment
                            .parseZone(post.attributes.created_at)
                            .format("MMMM DD, YYYY")}</span>
                    </Link>
                </li>
            </div>
        );
    });

    posts.reverse()

    return (
        <div className="archive">
            <div className="archive-header">
                <h1>ARCHIVES</h1>
            </div>
            <div className="archive-container">
                <ol>{posts}</ol>
            </div>
        </div>
    );
}

function mSTP(state) {
    return {
        posts: state.posts,
        user: state.user,
    };
}

export default connect(mSTP)(archives);
