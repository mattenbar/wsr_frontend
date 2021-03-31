import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
import ArticleHeaders from '../articles/articleHeaders';
import {voteArticleOne, voteArticleTwo} from '../../actions/pointcp/addVotes';

function PointCounterPoint(props) {

    

    

    const dateDifference = (date1) => {
// ((currentDay.getTime() - newestSectionOne.end_date.getTime()) / (1000 * 3600 * 24))
        let currentDay = new Date().toLocaleDateString();
        date1 = Date.parse(date1)
        let date2 = Date.parse(currentDay)
        // let Difference_In_Time = date2.getTime() - date1.getTime()
        // let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
        let Difference_In_Days = Math.floor((date1 - date2)/(1000 * 3600 * 24))
        return Difference_In_Days
        }
    

    const pointArticles = useSelector(state => {
        console.log("state", state)
        return (state.pcps.pointCPPosts)
    })

    const user_id = useSelector(state => {
        // console.log("state", state.user.user.id)
        return (state.user.user.id)
    })

    let olderSectionTwo 

    if (pointArticles.length > 1 && pointArticles[pointArticles.length-2] !== undefined) {
        olderSectionTwo = pointArticles[pointArticles.length-2].attributes

    }

    let newestSectionOne
    let newestId
   
    if (pointArticles.length > 0 && pointArticles[pointArticles.length-1] !== undefined) {
        newestSectionOne = pointArticles[pointArticles.length-1].attributes
        newestId = pointArticles[pointArticles.length-1].id
        
        
    }



    const dispatch = useDispatch()

    const handleVotingClickButtonOne = (e) => {
        e.preventDefault()

        if (!localStorage.token) {
            alert("Please sign in to vote")
        }

        if (localStorage.token !== undefined) {
            
            let pointcpData = {
                // id: newestId,
                pointcp_id: newestId,
                user_id: user_id,
                articleOneVote: 1
                // votesPointCPOne: newestVotes1 + 1
            }

            dispatch(voteArticleOne(pointcpData))
        }

    }

    const handleVotingClickButtonTwo = (e) => {
        e.preventDefault()

        if (!localStorage.token) {
            alert("Please sign in to vote")
        }

        if (localStorage.token !== undefined) {
            // debugger
            let pointcpData2 = {
                // id: newestId,
                // votesPointCPTwo: newestVotes2 + 1
                pointcp_id: newestId,
                user_id: user_id,
                articleTwoVote: 1
                // send these in with data to validate:
                // validates :pointcp_id, :user_id, presence: true
            }

            dispatch(voteArticleTwo(pointcpData2))
        }
    }

    if (pointArticles.length === 0) {
        return (
            <>
                <ArticleHeaders category={18} />
                <div className="noPosts">
                    {/* <h1>LOADING...</h1> */}
                    <h2>POINT-COUNTERPOINT COMING SOON</h2>
                </div>
            </>
        );
    } else {
        return (
            console.log("newestSectionOne", pointArticles[1]), 
            <div className="pointcpContainer">
                <ArticleHeaders category={18} />
                { pointArticles.length > 0 &&
                    <>
                        <div className="pointContainer1">
                            <div className="pointcp1">
                                <div className="pointTop">
                                <div className="pointHeaderLeft">
                                        <img src={newestSectionOne.imageOne} alt={newestSectionOne.authorOne} className="pointcpImage"/>
                                    </div>
                                    <div className="pointHeaderRight">
                                        <div className="pointbottom">
                                        <h1>{newestSectionOne.titleOne}</h1>
                                        <h2>{newestSectionOne.authorOne}</h2>
                                        <h3>{moment
                                    .parseZone(newestSectionOne.created_at)
                                    .format("MMMM DD, YYYY")}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointcpContent">
                                    <p>
                                        {newestSectionOne.contentOne}
                                    </p>
                                    
                                </div>
                                <div className="pointVote1">
                                    <button className="boxingButton" onClick={handleVotingClickButtonOne} >
                                        <div className="pv1">
                                            <h2>VOTE FOR JOHN &nbsp;&nbsp;</h2>
                                            <img src='/boxGloveLeft.png' className="boxGlove"/>
                                            {/* <h3 style={{color: "red", fontSize: "1vw"}} >[Votes: {newestSectionOne.votesPointCPOne}]</h3> */}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        
                            <div className="pointcp2">
                                <div className="pointTop2">
                                    <div className="pointHeaderRight">
                                        <div className="pointbottom2">
                                        <h1>{newestSectionOne.titleTwo}</h1>
                                        <h2>{newestSectionOne.authorTwo}</h2>
                                        <h3>{moment
                                    .parseZone(newestSectionOne.created_at)
                                    .format("MMMM DD, YYYY")}</h3>
                                        </div>
                                    </div>
                                    <div className="pointHeaderLeft">
                                        <img src={newestSectionOne.imageTwo} alt={newestSectionOne.authorTwo} className="pointcpImage"/>
                                    </div>
                                </div>
                                <div className="pointcpContent">
                                    <p>
                                        {newestSectionOne.contentTwo}
                                    </p>
                                    
                                </div>
                                <div className="pointVote2">
                                    <button className="boxingButton" onClick={handleVotingClickButtonTwo} >
                                        <div className="pv2">
                                            {/* <h3 style={{color: "red", fontSize: "1vw"}}>[Votes: {newestSectionOne.votesPointCPTwo}]</h3> */}
                                            <h2>VOTE FOR JOHN &nbsp;&nbsp;</h2>
                                            <img src='/boxGloveLeft.png' className="boxGlove"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        
                        </div>
                        <div className="countdown" >
                            <div className="countdownText" >
                                <h2>VOTING ENDS IN 28 DAYS</h2>
                            </div>
                        </div>
                    </>
                }
                { pointArticles.length > 1 &&
                    <>
                        <div className="pointContainer2">
                            <div className="pointcp3">
                                <div className="pointTop">
                                    <div className="pointHeaderLeft">
                                        <img src={olderSectionTwo.imageOne} alt={olderSectionTwo.authorOne} className="pointcpImage"/>
                                    </div>
                                    <div className="pointHeaderRight">
                                        <div className="pointbottom">
                                        <h1>{olderSectionTwo.titleOne}</h1>
                                        <h2>{olderSectionTwo.authorOne}</h2>
                                        <h3>{moment
                                    .parseZone(olderSectionTwo.created_at)
                                    .format("MMMM DD, YYYY")}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointcpContent">
                                    <p>
                                        {olderSectionTwo.contentOne}
                                    </p>
                                    
                                </div>
                            </div>
                        
                            <div className="pointcp4">
                                <div className="pointTop2">
                                    <div className="pointHeaderRight">
                                        <div className="pointbottom2">
                                        <h1>{olderSectionTwo.titleTwo}</h1>
                                        <h2>{olderSectionTwo.authorTwo}</h2>
                                        <h3>{moment
                                    .parseZone(olderSectionTwo.created_at)
                                    .format("MMMM DD, YYYY")}</h3>
                                        </div>
                                    </div>
                                    <div className="pointHeaderLeft">
                                        <img src={olderSectionTwo.imageTwo} alt={olderSectionTwo.authorTwo} className="pointcpImage"/>
                                    </div>
                                </div>
                                <div className="pointcpContent">
                                    <p>
                                        {olderSectionTwo.contentTwo}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {  dateDifference(olderSectionTwo.end_date) <= 0 &&
                            <div className="winner" >
                                <img className="trophyImg" src="/trophy.png" />
                                <div className="trophyHeaders" >
                                    <h2>WINNER</h2>
                                    <h1>{olderSectionTwo.winner}</h1>
                                </div>
                            </div>
                        }
                        {
                            dateDifference(olderSectionTwo.end_date) > 0 &&
                            <div className="winner" >
                                {/* <img className="trophyImg" src="/trophy.png" /> */}
                                <div className="trophyHeaders" >
                                    <h2>Voting Ends In: {dateDifference(olderSectionTwo.end_date)}</h2>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
        );
    }
}

function mSTP(state) {
    return {
        pointcp: state.pcps.pointCPPosts,
        user: state.user,
    };
}

export default connect(mSTP)(PointCounterPoint);