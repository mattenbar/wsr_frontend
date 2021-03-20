import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function CapitalConnections(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/1")
            .then((res) => res.json())
            .then((result) => {
                
                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
        console.log(posts), 
        <div className="category-show">
            <div className="category-image"><img src="carouselImages/CapitolConnections.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    CAPITAL 
                    <br/>
                    CONNECTIONS
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
        </div>
    );
}

export default CapitalConnections;