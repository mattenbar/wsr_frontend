import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function FromOurPartners(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/16")
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
            <div className="category-image"><img src="/carouselImages/FromOurPartners.png" alt=""></img></div>
            <div className="category-header">
                <h1>
                    FROM OUR
                    <br/>
                    Partners
                </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
            </div>
        </div>
    );
}

export default FromOurPartners;