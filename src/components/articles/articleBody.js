import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
import {addLikesDislikes} from '../../actions/articles/addLikesDislikes'

function ArticleBody(props) {

    const userId = useSelector( state => {
        // console.log("store", state.user.user.id)
        return state.user.user.id
    })

    let post = props.post

    const dispatch = useDispatch()

    const handleLike = (e) => {
        e.preventDefault();
        console.log("like")

        if (!localStorage.token) {
            alert("Please sign in to vote");
        }

        if (localStorage.token !== undefined) {
            let postVoteData = {
                post_id: post.id,
                user_id: userId,
                like: 1,
                dislike: 0,
            };

            dispatch(addLikesDislikes(postVoteData));
        }
    }

    const handleDislike = (e) => {
        e.preventDefault();
        console.log("dislike")

        if (!localStorage.token) {
            alert("Please sign in to vote");
        }

        if (localStorage.token !== undefined) {
            let postVoteData = {
                post_id: post.id,
                user_id: userId,
                like: 0,
                dislike: 1,
            };

            dispatch(addLikesDislikes(postVoteData));
        }
    }
    
    return (
        console.log("postvotes", post),
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
                <button onClick={handleLike} className="likeButton"><img className="likeImage" src={'/thumbsUp.png'} alt="thumbsUp"/></button>
                <button onClick={handleDislike} className="dislikeButton"><img className="dislikeImage" src={'/thumbsDown.png'} alt="thumbsDown"/></button>
                {/* <div className="socialShare">
                <h3>share</h3>
                </div> */}
        </>
    );
}

export default ArticleBody;