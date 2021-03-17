import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function ShoutOut(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/4")
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
            <img src="carouselImages/ShoutOuts.png" alt=""></img>
            <h1>
              &nbsp; SHOUT OUTS
              <br/>
              &nbsp; AND PUT DOWNS
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default ShoutOut;