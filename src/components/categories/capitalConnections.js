import React from "react";
import { connect } from "react-redux";
import moment from "moment";

function CapitalConnections(state, props) {
    if (state.categories.length > 0) {
        let posts = state.categories[0].attributes.posts.reverse();
        let newestPost = posts[0];
        let secondNewestPost = posts[1];
        let remainingPosts = posts.slice(2);

        if (remainingPosts.length > 0) {
            const remainingPostsMapped = remainingPosts.map((post) => {
                return (
                    <div className="smallGrid">
                        {/* Link to= */}
                        <img src={post.image} alt={post.title} />
                        <h2 className="newestPostHeader">{post.title}</h2>
                        <h3 className="lightblueAuthor">{post.author}</h3>
                        <h3 className="inidvidualPostDate">
                            {moment
                                .parseZone(post.created_at)
                                .format("MMMM DD, YYYY")}
                        </h3>
                    </div>
                );
            });

            return (
                // console.log("remainingPosts", newestPost, secondNewestPost, remainingPosts),
                console.log("cc", posts),
                (
                    <>
                        <div className="category-show">
                            <div className="category-image">
                                <img
                                    src="carouselImages/CapitolConnections.png"
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
                                    We spotlight private equity, venture capital
                                    or SPAC leaders focused on wealth management
                                    acquisitions, or executives from wealth
                                    management firms owned by sources of private
                                    capital. Here’s what to look for – And where
                                    to watch out.
                                </h5>
                            </div>
                        </div>
                        <div className="categoryTopTwo">
                            <div className="categoryTopLeft">
                                {/* Link to= */}
                                <img
                                    src={newestPost.image}
                                    alt={newestPost.title}
                                />
                                <h2 className="newestPostHeader">
                                    {newestPost.title}
                                </h2>
                                <h3 className="lightblueAuthor">
                                    {newestPost.author}
                                </h3>
                                <h3 className="inidvidualPostDate">
                                    {moment
                                        .parseZone(newestPost.created_at)
                                        .format("MMMM DD, YYYY")}
                                </h3>
                            </div>
                            <div className="categoryTopRight">
                                <img
                                    src={secondNewestPost.image}
                                    alt={secondNewestPost.title}
                                />
                                <h2 className="newestPostHeader">
                                    {secondNewestPost.title}
                                </h2>
                                <h3 className="lightblueAuthor">
                                    {secondNewestPost.author}
                                </h3>
                                <h3 className="inidvidualPostDate">
                                    {moment
                                        .parseZone(secondNewestPost.created_at)
                                        .format("MMMM DD, YYYY")}
                                </h3>
                            </div>
                        </div>
                        <div className="categoryRemainingArticles">
                            {remainingPostsMapped}
                        </div>
                    </>
                )
            );
        }
    } else {
        return <div className="noPosts">POSTS COMING SOON</div>;
    }
}

function mSTP(state) {
    return {
        categories: state.categories,
        user: state.user,
    };
}

export default connect(mSTP)(CapitalConnections);
