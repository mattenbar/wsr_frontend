import React, { useState, useEffect } from "react";
import { API_URL } from "../../apiConstants";
import { useSelector, useDispatch } from 'react-redux';
import PointcpArticleBody from './pointcpArticleBody';
import ArticleHeaders from '../articles/articleHeaders';
import PointcpEditForm from './pointcpEditForm';
import { deletePointcp } from '../../actions/pointcp/deletePointcp';
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";
import history from '../../history';
import { voteArticleOne, voteArticleTwo } from "../../actions/pointcp/addVotes";

function PointCounterPointArticle(props) {

    const user = useSelector(state => {
        return (state.user.user)
    })

    const user_id = user.id

    let admin

    if (user !== undefined) {
        admin = user.admin
    }

    let location = useLocation();

    let pointcp_id
    if (props.location.state) {
        pointcp_id = props.location.state.pointcp_id
    }


    const [pointcpArticle, setPointcpArticle] = useState([]);
    const [winner, setWinner] = useState('')

    const [inEditMode, setInEditMode] = useState(false)

    useEffect(() => {
        if (pointcp_id) {
            fetch(API_URL + `/pointcps/${pointcp_id}`)
                .then((res) => res.json())
                .then((data) => {
                    setPointcpArticle(data.pointcp.data);
                    setWinner(data.winner)
                });
        }
    }, []);

    const handleVotingClickButtonOne = (e) => {
        e.preventDefault();

        if (!localStorage.token) {
            alert("Please sign in to vote");
        }

        if (localStorage.token !== undefined) {
            let pointcpData = {
                pointcp_id: pointcp_id,
                user_id: user_id,
                articleOneVote: 1,
                articleTwoVote: 0,
            };

            dispatch(voteArticleOne(pointcpData));
        }
    };

    const handleVotingClickButtonTwo = (e) => {
        e.preventDefault();

        if (!localStorage.token) {
            alert("Please sign in to vote");
        }

        if (localStorage.token !== undefined) {
            let pointcpData2 = {
                pointcp_id: pointcp_id,
                user_id: user_id,
                articleOneVote: 0,
                articleTwoVote: 1,
            };

            dispatch(voteArticleTwo(pointcpData2));
        }
    };


    const handleOnClick = () => {
        setInEditMode(true)
    }

    const handleOnBack = () => {
        setInEditMode(false)
    }

    const dispatch = useDispatch()

    const handleOnDelete = (e) => {
        e.preventDefault()
        dispatch(deletePointcp(pointcp_id))
        history.back('/')
    }
    
    if (pointcpArticle.attributes === undefined) {
        return (
            <>
                <div className="category-show">
                    <ArticleHeaders category={'point-counterpoint'} />
                </div>
                <div>
                    <h1>LOADING...</h1>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="category-show">
                    <ArticleHeaders category={'point-counterpoint'} />
                </div>
                { inEditMode === false &&
                    <div className="individualPostDiv" >
                        <PointcpArticleBody
                            admin={admin}
                            article={pointcpArticle.attributes} 
                            pointcp_id={pointcp_id}
                            handleVotingClickButtonOne={handleVotingClickButtonOne}
                            handleVotingClickButtonTwo={handleVotingClickButtonTwo}
                            handleEditDeleteClick={handleOnClick}
                            winner={winner}
                        />
                    </div>
                }
                { inEditMode === true && admin === true && 
                    <div className="individualPostDiv" >
                        <PointcpEditForm
                            setInEditMode={setInEditMode}
                            pointcpArticle={pointcpArticle.attributes}
                            pointcp_id={pointcp_id} />
                        <button onClick={handleOnBack} className="adminButtons">BACK TO ARTICLE</button>
                        <button onClick={handleOnDelete} className="adminButtons">DELETE ARTICLE</button>
                    </div>
                }
            </>
        );
    }
}

export default withRouter(PointCounterPointArticle);