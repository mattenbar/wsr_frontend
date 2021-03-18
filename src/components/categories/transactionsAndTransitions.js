import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function TransactionsAndTransitions(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/15")
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.posts.data)
                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
        console.log(posts),
        <div className="category-show">
            <div className="category-image"><img src="carouselImages/Transactions&Trans.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    TRANSACTIONS
                    <br/>
                    AND TRANSITIONS
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
           
        </div>
    );
}

export default TransactionsAndTransitions;