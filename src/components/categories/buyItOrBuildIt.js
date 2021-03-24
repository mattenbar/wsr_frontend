import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function BuyItOrBuildIt(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/8")
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
                <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>BUY IT OR BUILD IT?</h1>
                <h4 className="tagline">What’s best: Proprietary, outsourced or blended solutions?</h4>
                <h5>Third-party solutions continue to proliferate. Are wealth management leaders better off with proprietary  solutions, outside services, or a mix of both? Each month, we’ll  speak to a different industry leader on a specific “buy it or build it”  dilemma – And how to best address it.</h5>
            </div>
        </div>
    );
}

export default BuyItOrBuildIt;