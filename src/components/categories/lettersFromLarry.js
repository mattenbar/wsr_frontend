import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function LettersFromLarry(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/12")
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
            <div className="category-image"><img src="carouselImages/LettersFromLarry.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    letters
                    <br/>
                    from larry
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
           
        </div>
    );
}

export default LettersFromLarry;