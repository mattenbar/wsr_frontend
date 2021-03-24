import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function DigitalDomains(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/2")
            .then((res) => res.json())
            .then((result) => {

                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
       
        (
            <div className="category-show">
                <div className="category-image"><img src="carouselImages/DigitalDomains.png" alt=""></img></div>
                <div className="category-header">
                    <h1> THE DIGITAL DOMAIN</h1>
                    <h4 className="tagline">Transformative tech leaders in the wealth  management space</h4>
                    <h5>We profile the fintech solutions, strategies and experts who are redefining the how the wealth management industry operates to unlock new  growth opportunities</h5>
                </div>
            </div>
        )
    );
}

export default DigitalDomains;
