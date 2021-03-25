import React from "react";
import { connect } from "react-redux";

import moment from "moment";
import { Link } from "react-router-dom";


function Beltway(state, props) {
    if (state.categories.length > 0) {
        let posts = state.categories[3].attributes.posts.reverse();
        let newestPost = posts[0];
        let secondNewestPost = posts[1];
        let remainingPosts = posts.slice(2);

        // debugger
        if (posts.length !== 0 && remainingPosts.length > 0) {
            const remainingPostsMapped = remainingPosts.map((post) => {
                return (
                    <div className="smallGrid" key={post.id}>
                        <Link
                            to={`/Beltway-And-Beyond/${post.id}`}
                            post_id={post.id}
                            className="ti-b"
                        >
                            <img src={post.image} alt={post.title} />
                            <h2 className="newestPostHeader">{post.title}</h2>
                            <h3 className="lightblueAuthor">{post.author}</h3>
                            <h3 className="inidvidualPostDate">
                                {moment
                                    .parseZone(post.created_at)
                                    .format("MMMM DD, YYYY")}
                            </h3>
                        </Link>
                    </div>
                );
            });

            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <img
                                src="carouselImages/Beltway&Beyond.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BELTWAY AND BEYOND</h1>
                            <h4 className="tagline">
                                Keeping you up to speed on key regulatory and
                                legislative trends
                            </h4>
                            <h5>
                                Keeping wealth management firms and other
                                industry participants aware of the most
                                important legislative and regulatory trends –
                                And how to stay ahead of the curve.
                            </h5>
                        </div>
                    </div>
                    <div className="categoryTopTwo">
                        <div className="categoryTopLeft">
                            <Link
                                to={`/Beltway-And-Beyond/${newestPost.id}`}
                                post_id={newestPost.id}
                                className="ti-b"
                            >
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
                            </Link>
                        </div>
                        <div className="categoryTopRight">
                            <Link
                                to={`/Beltway-And-Beyond/${secondNewestPost.id}`}
                                post_id={secondNewestPost.id}
                                className="ti-b"
                            >
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
                            </Link>
                        </div>
                    </div>
                    <div className="categoryRemainingArticles">
                        {remainingPostsMapped}
                    </div>
                </>
            );
        } else if (posts.length !== 0 && posts.length < 3) {
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <img
                                src="carouselImages/Beltway&Beyond.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BELTWAY AND BEYOND</h1>
                            <h4 className="tagline">
                                Keeping you up to speed on key regulatory and
                                legislative trends
                            </h4>
                            <h5>
                                Keeping wealth management firms and other
                                industry participants aware of the most
                                important legislative and regulatory trends –
                                And how to stay ahead of the curve.
                            </h5>
                        </div>
                    </div>
                    <div className="categoryTopTwo">
                        <div className="categoryTopLeft">
                            <Link
                                to={`/Beltway-And-Beyond/${newestPost.id}`}
                                post_id={newestPost.id}
                                className="ti-b"
                            >
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
                            </Link>
                        </div>
                        <div className="categoryTopRight">
                            <Link
                                to={`/Beltway-And-Beyond/${secondNewestPost.id}`}
                                post_id={secondNewestPost.id}
                                className="ti-b"
                            >
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
                            </Link>
                        </div>
                        <br />
                    </div>
                    <div className="somePosts">
                        <h2>MORE ARTICLES COMING SOON</h2>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="category-show">
                        <div className="category-image">
                            <img
                                src="carouselImages/Beltway&Beyond.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="category-header">
                            <h1>BELTWAY AND BEYOND</h1>
                            <h4 className="tagline">
                                Keeping you up to speed on key regulatory and
                                legislative trends
                            </h4>
                            <h5>
                                Keeping wealth management firms and other
                                industry participants aware of the most
                                important legislative and regulatory trends –
                                And how to stay ahead of the curve.
                            </h5>
                        </div>
                    </div>
                    <div className="noPosts">
                        <h2>ARTICLES COMING SOON</h2>
                    </div>
                </>
            );
        }
    } else {
        return (
            <>
                <div className="category-show">
                    <div className="category-image">
                        <img
                            src="carouselImages/Beltway&Beyond.png"
                            alt=""
                        ></img>
                    </div>
                    <div className="category-header">
                        <h1>BELTWAY AND BEYOND</h1>
                        <h4 className="tagline">
                            Keeping you up to speed on key regulatory and
                            legislative trends
                        </h4>
                        <h5>
                            Keeping wealth management firms and other industry
                            participants aware of the most important legislative
                            and regulatory trends – And how to stay ahead of the
                            curve.
                        </h5>
                    </div>
                </div>
                <div className="noPosts">
                    <h2>ARTICLES COMING SOON</h2>
                </div>
            </>
        );
    }
}

function mSTP(state) {
    return {
        categories: state.categories,
        user: state.user,
    };
}

export default connect(mSTP)(Beltway);
