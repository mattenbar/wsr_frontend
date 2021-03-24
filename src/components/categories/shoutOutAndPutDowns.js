import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function ShoutOut(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/4")
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
                <img src="carouselImages/ShoutOuts.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>SHOUT OUTS AND PUT DOWNS</h1>
                <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                <h5>Each month, wealth management professionals anonymously send us the  best and worst examples  of leadership, management and mentoring they’ve experienced in the course  of their careers.</h5>
            </div>
        </div>
    );
}

export default ShoutOut;