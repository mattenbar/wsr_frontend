import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function TransactionsAndTransitions(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/15")
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
                <img src="carouselImages/Transactions&Trans.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>TRANSACTIONS & TRANSITIONS</h1>
                <h4 className="tagline"> TAGLINE WILL GO HERE</h4>
                <h5>DESCRIPTOR WILL GO HERE.</h5>
            </div>
        </div>
    );
}

export default TransactionsAndTransitions;