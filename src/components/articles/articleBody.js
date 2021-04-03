import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
import {addLikesDislikes} from '../../actions/articles/addLikesDislikes'

function ArticleBody(props) {

    const userId = useSelector( state => {
        return state.user.user.id
    })

    let post = props.post

    let content = props.post.attributes.content

    const truncatedContent = content.slice(0, 450);

    const dispatch = useDispatch()

    const handleLike = (e) => {
        e.preventDefault();

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
                { userId &&  
                    <>
                        <p className="individualPostContent" dangerouslySetInnerHTML={{ __html: content }}></p>
                        <div className="articleLikes">
                            <button onClick={handleLike} className="likeButton"><img className="likeImage" src={'/thumbsUp.png'} alt="thumbsUp"/></button>
                            <button onClick={handleDislike} className="dislikeButton"><img className="dislikeImage" src={'/thumbsDown.png'} alt="thumbsDown"/></button>
                        </div>
                    </>
                }
                {!userId && 
                    <>
                        <p className="individualPostContent" dangerouslySetInnerHTML={{ __html: truncatedContent + ' ...'}}></p>
                        <h3 className="loginReadMore">Please <a href="#popup" >Sign Up</a> / <a href="#popup2" >Sign In</a> For Free To Read More</h3>
                    </>
                }
                {/* <div className="socialShare">
                <h3>share</h3>
                </div> */}
        </>
    );
}

export default ArticleBody;