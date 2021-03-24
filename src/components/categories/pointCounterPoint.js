import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function PointCounterPoint(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/3")
            .then((res) => res.json())
            .then((result) => {
             
                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
        <div className="category-show">
            <div className="category-image">
                <img src="carouselImages/PointCounterPoint.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>POINT-COUNTERPOINT</h1>
                <h4 className="tagline">  Two industry leaders enter – One industry leader wins.</h4>
                <h5>Our readers select the victors by delivering them with the  most likes. Select like in  the next 30 days for your  vote to be counted! We’ll  announce the winner at  the bottom of next month’s Point Counterpoint story.</h5>
            </div>
        </div>
    );
}

export default PointCounterPoint;