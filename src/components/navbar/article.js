import React from 'react';

function Article(props) {
    console.log("Article", props)
    // href link fragment identifier (#)

    // const boardName = props.name
    return (
        // console.log("article", props),
        <div className="" >
            <li>{props.title}</li>
        </div>
    );
}

export default Article;