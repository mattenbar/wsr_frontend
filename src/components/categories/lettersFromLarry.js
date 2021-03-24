import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function LettersFromLarry(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/12")
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
            <div className="category-image"><img src="carouselImages/LettersFromLarry.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    letters from larry
                </h1>
                <h4 className="tagline">Key trends defining wealth management</h4>
                <h5>Larry Roth’s shares his latest thoughts  on what’s shaping the wealth management space now and in the future.</h5>
            </div>
           
        </div>
    );
}

export default LettersFromLarry;