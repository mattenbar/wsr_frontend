import React, { useState, useEffect } from "react";

function FromOurPartners(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/categories/16")
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
            <img src="carouselImages/FromOurPartners.png" alt=""></img>
            <h1>
              &nbsp; FROM OUR
              <br/>
              &nbsp; PARTNERS
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default FromOurPartners;