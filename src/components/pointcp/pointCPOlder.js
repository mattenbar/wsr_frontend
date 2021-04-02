import React, {useState, useEffect} from 'react';
import moment from "moment";
import {API_URL} from '../../apiConstants';
import { Link } from 'react-router-dom';

function PointCPOlder({admin, article, olderId, handleEditDeleteClick2, handleVotingClickButtonOne, handleVotingClickButtonTwo}) {

    const [winner, setWinner] = useState('')

    useEffect(() => {
        fetch(API_URL + `/pointcps/${olderId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("data", data) //this also has tally of votes for each side if needed
                setWinner(data.winner)
            });
    }, [])

    const dateDifference = (date1) => {
        let currentDay = new Date().toLocaleDateString();
        date1 = Date.parse(date1);
        let date2 = Date.parse(currentDay);
        let Difference_In_Days = Math.floor(
            ((date1 - date2) / (1000 * 3600 * 24)) + 1
        );
        return Difference_In_Days;
    };

    const getDivs = (divName) => {
        switch(divName){
            case "pointVote1":
                return (<div className="pointVote1">
                    <button className="boxingButton" onClick={handleVotingClickButtonOne} >
                        <div className="pv1">
                            <h2>VOTE FOR {article.authorOne} &nbsp;&nbsp;</h2><img src='/boxGloveLeft.png' className="boxGlove"/>
                            {/* <img src='/boxGloveLeft.png' className="boxGlove"/> */}
                            {/* <h3 style={{color: "red", fontSize: "1vw"}} >[Votes: {article.votesPointCPOne}]</h3> */}
                        </div>
                    </button>
                </div>)

            case "pointVote2":
                return(
                    <div className="pointVote2">
                        <button className="boxingButton" onClick={handleVotingClickButtonTwo} >
                            <div className="pv2">
                                {/* <h3 style={{color: "red", fontSize: "1vw"}}>[Votes: {article.votesPointCPTwo}]</h3> */}
                                <h2>VOTE FOR {article.authorTwo} &nbsp;&nbsp;</h2><img src='/boxGloveLeft.png' className="boxGlove"/>
                            </div>
                        </button>
                    </div>
                )

            case "newestCountdown":
                return(
                    <div className="newestCountdown2" >
                        <div className="countdownText2" >
                            <h2 style={{color: "rgb(0, 59, 91)"}}>VOTING ENDS IN {dateDifference(article.end_date)} DAYS</h2>
                        </div>
                    </div>
                )
            
            case "newestWinner":
                return(
                    <div className="newestWinner2" >
                            <img className="countdownTrophyImg" src="/trophy.png" />
                        <div className="trophyHeaders" >
                            <h2 style={{color: "black"}}>WINNER</h2>
                            <h1 style={{color: "rgb(0, 59, 91)"}}>{winner}</h1>
                        </div>
                    </div>  
                )

            default:
                <div></div>
        }
    }

    return (
        <>
            <div className="pointcptopic" >
                <div>
                    <h3>TOPIC:</h3>
                    <h1>{article.topic}</h1>
                </div>
            </div>
            <div className="pointContainer2">
                <div className="pointcp3">
                    <div className="pointTop">
                        
                            <div className="pointHeaderLeft">
                                <img src={article.imageOne} alt={article.authorOne} className="pointcpImage"/>
                            </div>
                            <div className="pointHeaderRight">
                            <Link to={{    
                                pathname: `/Point-Counterpoint/${olderId}`,
                                state: {
                                    pointcp_id: olderId
                                }
                        }} className="pointcpLinks"> 

                            <div className="pointbottom">
                                <h1>AGREE</h1>
                                <h1>{article.titleOne}</h1>
                                <h2>{article.authorOne}</h2>
                                <h3>{moment
                            .parseZone(article.created_at)
                            .format("MMMM DD, YYYY")}</h3>
                                </div>
                                </Link>
                            </div>
                        
                    </div>
                    <div className="pointcpContent">
                        <p dangerouslySetInnerHTML={{ __html: article.contentOne}}>
                        
                        </p>
                    </div>
                    {dateDifference(article.end_date) > 0 &&
                        getDivs("pointVote1")
                    }
                    
                </div>
            
                <div className="pointcp4">
                    <div className="pointTop2">
                        
                            <div className="pointHeaderRight">
                            <Link to={{    
                            pathname: `/Point-Counterpoint/${olderId}`,
                            state: {
                                pointcp_id: olderId
                            }
                        }} className="pointcpLinks"> 

                            <div className="pointbottom2">
                                <h1>DISAGREE</h1>

                                <h1>{article.titleTwo}</h1>
                                <h2>{article.authorTwo}</h2>
                                <h3>{moment
                            .parseZone(article.created_at)
                            .format("MMMM DD, YYYY")}</h3>
                                </div>
                                </Link>
                            </div>
                            <div className="pointHeaderLeft">
                                <img src={article.imageTwo} alt={article.authorTwo} className="pointcpImage"/>
                            </div>
                        
                    </div>
                    <div className="pointcpContent">
                        <p dangerouslySetInnerHTML={{ __html: article.contentTwo}}></p>
                    </div>
                    {dateDifference(article.end_date) > 0 &&
                        getDivs("pointVote2")
                    }
                </div>

                { admin &&
                    <div className="editDeletePointCP1">
                        <button onClick={handleEditDeleteClick2} className="adminButtons">EDIT / DELETE ARTICLE</button>
                    </div>
                }
                    

                {dateDifference(article.end_date) > 0 &&
                    getDivs("newestCountdown")
                }
                {dateDifference(article.end_date) <= 0 &&
                    getDivs("newestWinner")
                }
                { admin &&
                    <div>
                        <button onClick={handleEditDeleteClick2} className="adminButtons">EDIT / DELETE ARTICLE</button>
                    </div>
                }
                    
                
            </div>
            
        </>
    );
}

export default PointCPOlder;
