import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function Beltway(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/5")
            .then((res) => res.json())
            .then((result) => {
                
                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
        // posts has actual articles now not just the post id - posts[number]["attributes"] gets the post
        console.log(posts), 
        <div className="category-show">
            <div className="category-image">
                <img src="carouselImages/Beltway&Beyond.png" alt=""></img>
            </div>
            <div className="category-header">
                <h1>BELTWAY AND BEYOND</h1>
                <h4 className="tagline">Keeping you up  to speed on key regulatory and legislative  trends</h4>
                <h5>Keeping wealth  management firms and  other industry participants  aware of the most important legislative and  regulatory trends – And  how to stay ahead of the  curve.</h5>
            </div>
        </div>
    );
}

export default Beltway;