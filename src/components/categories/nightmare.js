import React, { useState, useEffect } from "react";

function Nightmare(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/categories/7")
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
            <img src="carouselImages/NightmareOnCompSt.png" alt=""></img>
            <h1>
              &nbsp; NIGHTMARE
              <br/>
              &nbsp; ON COMPLIANCE ST
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default Nightmare;