import React, { useState, useEffect } from "react";
import { API_URL } from "../../apiConstants";
import { useSelector, useDispatch } from 'react-redux';
import ArticleBody from './articleBody';
import ArticleHeaders from './articleHeaders';
import ArticleEditForm from './articleEditForm';
import { deletePost } from '../../actions/deletePost';
import { withRouter } from "react-router";

function PeopleMovesArticle(props) {
    useEffect(() => {
        document.title = 'People Moves | Wealth Solutions Report';
    });

    const user = useSelector(state => {
        return (state.user.user)
    })

    let admin

    if (user !== undefined) {
        admin = user.admin
    }

    const post_id = props.match.params.id;

    const [post, setPost] = useState([]);
    const [inEditMode, setInEditMode] = useState(false)

    useEffect(() => {
        fetch(API_URL + `/posts/${post_id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post.data);
            });
            // eslint-disable-next-line
    }, []);

    const handleOnClick = () => {
        setInEditMode(true)
    }

    const handleOnBack = () => {
        setInEditMode(false)
    }

    const dispatch = useDispatch()

    const handleOnDELETE = (e) => {
        e.preventDefault()
        dispatch(deletePost(post_id))
        props.history.push('/');
    }

   

    if (post.attributes === undefined) {
        return (
            (
                <div>
                    <h1>LOADING...</h1>
                </div>
            )
        );
    } else {
        return (
            <>
                <div className="category-show">
                    <ArticleHeaders category={post.attributes.category_id} />
                </div>
                { inEditMode === false &&
                    <div className="individualPostDiv" >
                        <ArticleBody post={post} />
                        { admin === true && 
                            <div>
                                <button onClick={handleOnClick} className="adminButtons">EDIT / DELETE ARTICLE</button>
                                
                            </div>
                        }
                    </div>
                }
                { inEditMode === true && admin === true && 
                    <div className="individualPostDiv" >
                        <ArticleEditForm setInEditMode={setInEditMode} post={post} />
                        <button onClick={handleOnBack} className="adminButtons">BACK TO ARTICLE</button>
                        <button onClick={handleOnDELETE} className="adminButtons">DELETE ARTICLE</button>
                    </div>
                }
            </>
        );
    }
}

export default withRouter(PeopleMovesArticle);
