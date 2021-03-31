import React, {useState, useEffect} from 'react';
import moment from "moment";
import {API_URL} from '../../apiConstants';

function PointCPOlder({olderSectionTwo, olderId}) {

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
            (date1 - date2) / (1000 * 3600 * 24)
        );
        return Difference_In_Days;
    };

    return (
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
                        <p dangerouslySetInnerHTML={{ __html: olderSectionTwo.contentOne}}>
                        
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
                        <p dangerouslySetInnerHTML={{ __html: olderSectionTwo.contentTwo}}>
                        
                        </p>
                    </div>
                </div>
            </div>
            {
                dateDifference(olderSectionTwo.end_date) > 0 &&
                <div className="winner" >
                    <div className="trophyHeaders" >
                        <h2 style={{color: "rgb(0, 59, 91)"}}>VOTING ENDS IN {dateDifference(olderSectionTwo.end_date)} DAYS</h2>
                    </div>
                </div>
            }
            {  dateDifference(olderSectionTwo.end_date) <= 0 &&
                <div className="winner" >
                    <img className="trophyImg" src="/trophy.png" />
                    <div className="trophyHeaders" >
                        <h2>WINNER</h2>
                        <h1 style={{color: "rgb(0, 59, 91)"}}>{winner}</h1>
                    </div>
                </div>
            }
        </>
    );
}

export default PointCPOlder;