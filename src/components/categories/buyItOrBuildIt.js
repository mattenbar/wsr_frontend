import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function BuyItOrBuildIt(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/8")
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
            <img src="carouselImages/BuyItOrBuildIt.png" alt=""></img>
            <h1>
              &nbsp; BUY IT
              <br/>
              &nbsp; OR BUILD IT?
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default BuyItOrBuildIt;