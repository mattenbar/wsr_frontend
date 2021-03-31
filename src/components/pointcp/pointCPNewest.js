import React, {useState, useEffect} from 'react';
import moment from "moment";
import {API_URL} from '../../apiConstants';

function PointCPNewest({newestSectionOne, newestId, handleVotingClickButtonOne, handleVotingClickButtonTwo}) {

    const [winner, setWinner] = useState('')

    useEffect(() => {
        fetch(API_URL + `/pointcps/${newestId}`)
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
            (date1 - date2) / (1000 * 3600 * 24)
        );
        return Difference_In_Days;
    };


    return (
        console.log(dateDifference(newestSectionOne.end_date)),
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
                        <p dangerouslySetInnerHTML={{ __html: newestSectionOne.contentOne}}>
                        
                        </p>
                        
                    </div>
                    <div className="pointVote1">
                        <button className="boxingButton" onClick={handleVotingClickButtonOne} >
                            <div className="pv1">
                                <h2>VOTE FOR JOHN &nbsp;&nbsp;<img src='/boxGloveLeft.png' className="boxGlove"/></h2>
                                {/* <img src='/boxGloveLeft.png' className="boxGlove"/> */}
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
                        <p dangerouslySetInnerHTML={{ __html: newestSectionOne.contentTwo}}>
                        
                        </p>
                        
                    </div>
                    <div className="pointVote2">
                        <button className="boxingButton" onClick={handleVotingClickButtonTwo} >
                            <div className="pv2">
                                {/* <h3 style={{color: "red", fontSize: "1vw"}}>[Votes: {newestSectionOne.votesPointCPTwo}]</h3> */}
                                <h2>VOTE FOR JOHN &nbsp;&nbsp;<img src='/boxGloveLeft.png' className="boxGlove"/></h2>
                            </div>
                        </button>
                    </div>
                </div>
            
            </div>
            {
                dateDifference(newestSectionOne.end_date) > 0 &&
                <div className="newestCountdown" >
                    <div className="countdownText" >
                        <h2 style={{color: "rgb(0, 59, 91)"}}>VOTING ENDS IN {dateDifference(newestSectionOne.end_date)} DAYS</h2>
                    </div>
                </div>
            }
            {  dateDifference(newestSectionOne.end_date) <= 0 &&
                <div className="newestWinner" >
                    <img className="countdownTrophyImg" src="/trophy.png" />
                    <div className="trophyHeaders" >
                        <h2>WINNER</h2>
                        <h1>{winner}</h1>
                    </div>
                </div>
            }
        </>
    );
}

export default PointCPNewest;