import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPointcps } from '../../actions/fetchPointcps';
import moment from "moment";
import ArticleHeaders from '../articles/articleHeaders';

function PointCounterPoint(state) {

    const pointArticles = useSelector(state => {
        // console.log(state.pcps.pointCPPosts[state.pcps.pointCPPosts.length-2].attributes)
        return (state.pcps.pointCPPosts)
    })

    let olderSectionTwo 
    if (pointArticles.length > 0 && pointArticles[pointArticles.length-2] !== undefined) {
        olderSectionTwo = pointArticles[pointArticles.length-2].attributes
    }
    let newestSectionOne
    if (pointArticles.length > 0 && pointArticles[pointArticles.length-1] !== undefined) {
        newestSectionOne = pointArticles[pointArticles.length-1].attributes
    }

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchPointcps())
    },[])

    const handleVotingClick = () => {
        
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
            <div className="pointcpContainer">
                <ArticleHeaders category={18} />
                { pointArticles.length > 0 &&
                    <>
                        <div class="pointContainer1">
                            <div class="pointcp1">
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
                                    <button className="boxingButton" onClick={handleVotingClick}>
                                        <div className="pv1">
                                            <h2>VOTE FOR JOHN &nbsp;&nbsp;</h2>
                                            <img src='/boxGloveLeft.png' className="boxGlove"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        
                            <div class="pointcp2">
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
                                    <button className="boxingButton" onClick={handleVotingClick}>
                                        <div className="pv2">
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
                        <div class="pointContainer2">
                            <div class="pointcp3">
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
                        
                            <div class="pointcp4">
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
                        <div className="winner" >
                            <img className="trophyImg" src="/trophy.png" />
                            <div className="trophyHeaders" >
                                <h2>WINNER</h2>
                                <h1>JOHN DOE</h1>
                            </div>
                        </div>
                    </>
                }
            </div>
        );
    }
}

function mSTP(state) {
    return {
        pointcp: state.pointcp,
        user: state.user,
    };
}

export default connect(mSTP)(PointCounterPoint);
