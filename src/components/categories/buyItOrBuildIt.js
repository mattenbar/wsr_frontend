
        import React from "react";
        import { connect } from "react-redux";
        import moment from "moment";
        import { Link } from "react-router-dom";
        
        function BuyItOrBuildIt(state, props) {
            if (state.categories.length > 0) {
                let posts = state.categories[6].attributes.posts.reverse();
                let newestPost = posts[0];
                let secondNewestPost = posts[1];
                let remainingPosts = posts.slice(2);
        
                if (posts.length !== 0 && remainingPosts.length > 0) {
                    const remainingPostsMapped = remainingPosts.map((post) => {
                        return (
                            <div className="smallGrid" key={post.id}>
                                <Link
                                    to={`/Buy-It-Or-Build-It/${post.id}`}
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
                        (
                            <>
                                <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
                </div>
            </div>
                                <div className="categoryTopTwo">
                                    <div className="categoryTopLeft">
                                        <Link
                                            to={`/Buy-It-Or-Build-It/${newestPost.id}`}
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
                                            to={`/Buy-It-Or-Build-It/${secondNewestPost.id}`}
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
                                                    .parseZone(
                                                        secondNewestPost.created_at
                                                    )
                                                    .format("MMMM DD, YYYY")}
                                            </h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="categoryRemainingArticles">
                                    {remainingPostsMapped}
                                </div>
                            </>
                        )
                    );
                } else if (posts.length !== 0 && posts.length < 3) {
                    return (
                        <>
                            <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
                </div>
            </div>
                            <div className="categoryTopTwo">
                                <div className="categoryTopLeft">
                                    <Link
                                        to={`/Buy-It-Or-Build-It/${newestPost.id}`}
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
                                        to={`/Buy-It-Or-Build-It/${secondNewestPost.id}`}
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
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
                </div>
            </div>
                            <div className="noPosts"><h2>ARTICLES COMING SOON</h2></div>
                        </>
                    );
                }
            } else {
                return (
                    <>
                        <div className="category-show">
                <div className="category-image">
                    <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
                </div>
                <div className="category-header">
                    <h1>BUY IT OR BUILD IT?</h1>
                    <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                    <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
                </div>
            </div>
                        <div className="noPosts"><h2>ARTICLES COMING SOON</h2></div>
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
        
        export default connect(mSTP)(BuyItOrBuildIt);
        