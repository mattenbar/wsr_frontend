import React, { useState, useEffect } from "react";

function ShoutOut(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/categories/4")
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