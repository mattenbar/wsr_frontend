import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function WalletShare(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/9")
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
                <img src="carouselImages/WalletShare.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>WALLET SHARE</h1>
                <h4 className="tagline">Sales, marketing  and communications strategies and leaders</h4>
                <h5>Actionable tips and strategies from sales,  marketing and communications leaders  on how to stand out from  the crowd to generate increased growth.</h5>
            </div>
        </div>
    );
}

export default WalletShare;