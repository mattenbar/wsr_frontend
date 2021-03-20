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
            <div className="category-image"><img src="carouselImages/BuyItOrBuildIt.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    BUY IT
                    <br/>
                    OR BUILD IT?
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
        </div>
    );
}

export default BuyItOrBuildIt;