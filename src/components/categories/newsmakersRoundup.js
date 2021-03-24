import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function NewsmakersRoundup(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/14")
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
                <img src="carouselImages/NewsMakersRoundUp.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>NEWSMAKERS ROUNDUP</h1>
                <h4 className="tagline">Top news condensed from top wealth management media outlets</h4>
                <h5>Notes from Larry:  I’ve assembled my personal picks of top news stories from media  outlets covering the wealth management space – And why you should care.</h5>
            </div>
        </div>
    );
}

export default NewsmakersRoundup;