import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function Nightmare(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/7")
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
                <img src="/carouselImages/NightmareOnCompSt.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>NIGHTMARE ON COMPLIANCE ST </h1>
                <h4 className="tagline">Your biggest compliance worries addressed</h4>
                <h5>What are the biggest compliance questions that aren’t easily answered and keep you up at night? Industry-leading compliance expert Sander Ressler answers your anonymous questions.</h5>
            </div>
        </div>
    );
}

export default Nightmare;