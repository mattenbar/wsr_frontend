import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticleHeaders from "../articles/articleHeaders";
import { voteArticleOne, voteArticleTwo } from "../../actions/pointcp/addVotes";
import PointCPNewest from "./pointCPNewest";
import PointCPOlder from "./pointCPOlder";
import PointcpEditForm from './pointcpEditForm';
import history from '../../history';
import {deletePointcp} from '../../actions/pointcp/deletePointcp';
import {Link} from 'react-router-dom';

function PointCounterPoint(props) {

    const [inEditMode1, setInEditMode1] = useState(false)
    const [inEditMode2, setInEditMode2] = useState(false)

    const pointArticles = useSelector((state) => {
        return state.pcps.pointCPPosts;
    });

    const user = useSelector((state) => {
        return state.user.user;
    });
    const user_id = user.id
    const admin = user.admin

    const dispatch = useDispatch();

    if (pointArticles.length > 0) {
        let newestSectionOne = pointArticles[pointArticles.length - 1].attributes;
        let newestId = pointArticles[pointArticles.length - 1].id;

        let olderSectionTwo;
        let olderId
        if (pointArticles.length > 1) {
            olderSectionTwo = pointArticles[pointArticles.length - 2].attributes;
            olderId = pointArticles[pointArticles.length - 2].id;
        }

        const handleVotingClickButtonOne = (e) => {
            e.preventDefault();

            if (!localStorage.token) {
                alert("Please sign in to vote");
            }

            if (localStorage.token !== undefined) {
                let pointcpData = {
                    pointcp_id: newestId,
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
                    pointcp_id: newestId,
                    user_id: user_id,
                    articleOneVote: 0,
                    articleTwoVote: 1,
                };

                dispatch(voteArticleTwo(pointcpData2));
            }
        };

        const handleEditDeleteClick = (e) => {
            e.preventDefault()
            setInEditMode1(true)
        }

        const handleEditDeleteClick2 = (e) => {
            e.preventDefault()
            setInEditMode2(true)
        }

        const handleOnBack1 = (e) => {
            e.preventDefault()
            setInEditMode1(false)
        }

        const handleOnBack2 = (e) => {
            e.preventDefault()
            setInEditMode2(false)
        }

        const handleOnDelete1 = (e) => {
            e.preventDefault()
            dispatch(deletePointcp(newestId))
            history.back('/')
        }

        const handleOnDelete2 = (e) => {
            e.preventDefault()
            dispatch(deletePointcp(olderId))
            history.back('/')
        }

        return (
            // console.log(pointArticles.length > 1),
            <div className="pointcpContainer">
                    <ArticleHeaders category={"point-counterpoint"} />
                    { inEditMode1 === false &&
                        <PointCPNewest
                            admin={admin}
                            article={newestSectionOne}
                            newestId={newestId}
                            handleVotingClickButtonOne={
                                handleVotingClickButtonOne
                            }
                            handleVotingClickButtonTwo={
                                handleVotingClickButtonTwo
                            }
                            handleEditDeleteClick={handleEditDeleteClick}
                        />
                    }
                    { inEditMode1 === true &&
                        <div className="individualPostDiv">
                            <PointcpEditForm setInEditMode={setInEditMode1} pointcpArticle={newestSectionOne} pointcp_id={newestId} />
                            <button onClick={handleOnBack1} className="adminButtons">BACK TO POINT-CP</button>
                            <button onClick={handleOnDelete1} className="adminButtons">DELETE POINT-CP</button>
                        </div>
                    }

                    { inEditMode2 === false && pointArticles.length > 1 && 
                        <PointCPOlder
                            admin={admin}
                            article={olderSectionTwo}
                            olderId={olderId}
                            handleEditDeleteClick2={handleEditDeleteClick2}
                        />
                    }
                    { inEditMode2 === true &&
                        <div className="individualPostDiv">
                            <PointcpEditForm setInEditMode={setInEditMode1} pointcpArticle={olderSectionTwo} pointcp_id={olderId}/>
                            <button onClick={handleOnBack2} className="adminButtons">BACK TO POINT-CP</button>
                            <button onClick={handleOnDelete2} className="adminButtons">DELETE POINT-CP</button>
                        </div>
                    }
                    <div className="linkToArchives-Container">
                        <Link to="/Point-Counterpoint-Archives" className="linkToArchives">POINT-COUNTERPOINT ARCHIVES</Link>
                    </div>
            </div>
        )
    } else {
        return (
            <>
                <ArticleHeaders category={"point-counterpoint"} />
                <div className="noPosts">
                    {/* <h1>LOADING...</h1> */}
                    <h2>POINT-COUNTERPOINT COMING SOON</h2>
                </div>
            </>
        );
    }
}

export default PointCounterPoint;
