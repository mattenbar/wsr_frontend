import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL } from "../../apiConstants";
import { Link } from "react-router-dom";

function PointCPNewest({
    admin,
    article,
    newestId,
    handleVotingClickButtonOne,
    handleVotingClickButtonTwo,
    handleEditDeleteClick,
}) {
    const [winner, setWinner] = useState("");

    useEffect(() => {
        fetch(API_URL + `/pointcps/${newestId}`)
            .then((res) => res.json())
            .then((data) => {
                setWinner(data.winner);
            });
    }, []);

    const dateDifference = (date1) => {
        let currentDay = new Date().toLocaleDateString();
        date1 = Date.parse(date1);
        let date2 = Date.parse(currentDay);
        let Difference_In_Days = Math.floor(
            (date1 - date2) / (1000 * 3600 * 24) + 1
        );
        return Difference_In_Days;
    };

    const getDivs = (divName) => {
        switch (divName) {
            case "pointVote1":
                return (
                    <div className="pointVote1">
                        <button
                            className="boxingButton"
                            onClick={handleVotingClickButtonOne}
                        >
                            <div className="pv1">
                                <h2>
                                    VOTE FOR {article.authorOne} &nbsp;&nbsp;
                                </h2>
                                <img
                                    src="/boxGloveLeft.png"
                                    className="boxGlove"
                                />
                            </div>
                        </button>
                    </div>
                );

            case "pointVote2":
                return (
                    <div className="pointVote2">
                        <button
                            className="boxingButton"
                            onClick={handleVotingClickButtonTwo}
                        >
                            <div className="pv2">
                                <h2>
                                    VOTE FOR {article.authorTwo} &nbsp;&nbsp;
                                </h2>
                                <img
                                    src="/boxGloveLeft.png"
                                    className="boxGlove"
                                />
                            </div>
                        </button>
                    </div>
                );

            case "newestCountdown":
                return (
                    <div className="newestCountdown1">
                        <div className="countdownText">
                            <h2 style={{ color: "rgb(0, 59, 91)" }}>
                                VOTING ENDS IN{" "}
                                {dateDifference(article.end_date)} DAYS
                            </h2>
                        </div>
                    </div>
                );

            case "newestWinner1":
                return (
                    <div className="newestWinner1">
                        <div className="trophyHeaders">
                            <h1 style={{ color: "rgb(0, 59, 91)" }}>
                                <img className="countdownTrophyImg" src="/trophy.png" /> Winner: {winner}
                            </h1>
                        </div>
                    </div>
                );

            default:
                <div></div>;
        }
    };

    return (
        <div>
            <div className="pointcptopic">
                <Link
                    to={{
                        pathname: `/Point-Counterpoint/${newestId}`,
                        state: {
                            pointcp_id: newestId,
                        },
                    }}
                    className="pointcpLinks"
                >
                    <div>
                        <h3>TOPIC:</h3>
                        <h1>{article.topic}</h1>
                    </div>
                </Link>
            </div>
            <div className="pointContainer1">
                <div className="pointcp1">
                    <div className="pointTop">
                        <div className="pointHeaderLeft">
                            <img
                                src={article.imageOne}
                                alt={article.authorOne}
                                className="pointcpImage"
                            />
                        </div>

                        <div className="pointHeaderRight">
                            <div className="pointbottom">
                                <h1>AGREE</h1>
                                <h1>{article.authorOne}</h1>
                                <h2>{article.titleOne}</h2>
                                <h3>
                                    {moment
                                        .parseZone(article.created_at)
                                        .format("MMMM DD, YYYY")}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: article.contentOne,
                            }}
                        ></p>
                    </div>
                </div>
                <div className="pointcp2">
                    <div className="pointTop2">
                        <div className="pointHeaderRight">
                                <div className="pointbottom2">
                                    <h1>DISAGREE</h1>
                                    <h1>{article.authorTwo}</h1>
                                    <h2>{article.titleTwo}</h2>
                                    <h3>
                                        {moment
                                            .parseZone(article.created_at)
                                            .format("MMMM DD, YYYY")}
                                    </h3>
                                </div>
                        </div>
                        <div className="pointHeaderLeft">
                            <img
                                src={article.imageTwo}
                                alt={article.authorTwo}
                                className="pointcpImage"
                            />
                        </div>
                    </div>
                    <div className="pointcpContent">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: article.contentTwo,
                            }}
                        ></p>
                    </div>                   
                </div>
                
                <div className="countdown-and-voting">

                    {dateDifference(article.end_date) > 0 && getDivs("newestCountdown")} 
                    {dateDifference(article.end_date) <= 0 && getDivs("newestWinner1")}
                    
                    
                    <div className="voting-container">
                        {dateDifference(article.end_date) > 0 && getDivs("pointVote2")}

                        {dateDifference(article.end_date) > 0 && getDivs("pointVote1")}
                    </div>
                </div>
                {admin && (
                    <div className="editDeletePointCP">
                        <button
                            onClick={handleEditDeleteClick}
                            className="adminButtons"
                        >
                            EDIT / DELETE ARTICLE
                        </button>
                    </div>
                )}
            
                

            </div>
            
            

           
            
        </div>
    );
}

export default PointCPNewest;
