import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import ArticleHeaders from '../articles/articleHeaders';

function WordsInEdgewise(state) {
    let categoryId = 17
    let backEndCategory = categoryId + 1

    if (state.categories.length > 0) {
        let posts = state.categories[categoryId].attributes.posts.reverse();
        let newestPost = posts[0];
        let secondNewestPost = posts[1];
        let remainingPosts = posts.slice(2,10);
        let remainingPostsMapped = []

        if (remainingPosts.length > 0) {
            remainingPostsMapped = remainingPosts.map((post) => {
                return (
                    <div className="smallGrid" key={post.id}>
                        <Link
                            to={`/Words-In-Edgewise/${post.id}`}
                            post_id={post.id}
                            className="ti-b"
                        >
                            <img src={post.image} alt={post.title} />
                            <h2 className="newestPostHeader">{post.title}</h2>
                            <h3 className="lightblueAuthor">{post.author}</h3>
                            <h3 className="individualPostDate">
                                {moment
                                    .parseZone(post.created_at)
                                    .format("MMMM DD, YYYY")}
                            </h3>
                        </Link>
                    </div>
                );
            });
        }
        if (posts.length !== 0) {
            return (
                <>
                    <ArticleHeaders category={backEndCategory} />
                    <div className="categoryTopTwo">
                        { newestPost !== undefined &&
                            <div className="categoryTopLeft">
                                <Link
                                    to={`/Words-In-Edgewise/${newestPost.id}`}
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
                                    <h3 className="individualPostDate">
                                        {moment
                                            .parseZone(newestPost.created_at)
                                            .format("MMMM DD, YYYY")}
                                    </h3>
                                </Link>
                            </div>
                        }
                        { secondNewestPost !== undefined &&
                            <div className="categoryTopRight">
                                <Link
                                    to={`/Words-In-Edgewise/${secondNewestPost.id}`}
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
                                    <h3 className="individualPostDate">
                                        {moment
                                            .parseZone(secondNewestPost.created_at)
                                            .format("MMMM DD, YYYY")}
                                    </h3>
                                </Link>
                            </div>
                        }
                    </div>
                    {/* { remainingPosts.length < 1 &&
                        <div className="somePosts">
                            <h2>MORE ARTICLES COMING SOON</h2>
                        </div>
                    } */}
                    { remainingPosts.length > 0 &&
                        <div className="categoryRemainingArticles">
                            {remainingPostsMapped}
                        </div>
                    }
                </>
            )
        } else {
            return (
                <>
                    <ArticleHeaders category={backEndCategory} />
                    <div className="noPosts">
                        <h2>ARTICLES COMING SOON</h2>
                    </div>
                </>
            );
        }
    } else {
        return (
            <>
                <ArticleHeaders category={backEndCategory} />
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

export default connect(mSTP)(WordsInEdgewise);
