import React, { useState, useEffect } from "react";

function CapitalConnections(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/categories/1")
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
            <img src="carouselImages/CapitolConnections.png" alt=""></img>
            <h1>
              &nbsp; CAPITAL 
              <br/>
              &nbsp; CONNECTIONS
            </h1>
            <span className="blackLineFull"></span>
        </div>
    );
}

export default CapitalConnections;