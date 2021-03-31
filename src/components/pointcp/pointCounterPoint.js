import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import ArticleHeaders from "../articles/articleHeaders";
import { voteArticleOne, voteArticleTwo } from "../../actions/pointcp/addVotes";
import PointCPNewest from "./pointCPNewest";
import PointCPOlder from "./pointCPOlder";

function PointCounterPoint(props) {
   

    const pointArticles = useSelector((state) => {
        return state.pcps.pointCPPosts;
    });

    console.log(pointArticles.length)

    const user_id = useSelector((state) => {
        return state.user.user.id;
    });

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
                    articleTwoVote: 1,
                };

                dispatch(voteArticleTwo(pointcpData2));
            }
        };

        return (
            console.log(pointArticles.length > 1),
            <div className="pointcpContainer">
                    <ArticleHeaders category={18} />
                    <PointCPNewest
                        newestSectionOne={newestSectionOne}
                        newestId={newestId}
                        handleVotingClickButtonOne={
                            handleVotingClickButtonOne
                        }
                        handleVotingClickButtonTwo={
                            handleVotingClickButtonTwo
                        }
                    />
                    {pointArticles.length > 1 && 
                        <PointCPOlder
                            olderSectionTwo={olderSectionTwo}
                            olderId={olderId}
                        />
                    }
            </div>
        )
    } else {
        return (
            <>
                <ArticleHeaders category={18} />
                <div className="noPosts">
                    {/* <h1>LOADING...</h1> */}
                    <h2>POINT-COUNTERPOINT COMING SOON</h2>
                </div>
            </>
        );
    }
}

export default PointCounterPoint;
