import React from 'react';
import { useSelector } from 'react-redux';
import {GetSlug} from '../../actions/getSlug'
import {Link} from 'react-router-dom'
import moment from "moment";

function Search2(props) {

    const storeProps = useSelector(state => {
        return state
    })

    const filteredPosts = storeProps.search.filteredPosts

    let postsMapped

    if (filteredPosts.length > 0) {
        postsMapped = filteredPosts.map(post => {
            let slug = GetSlug(post.attributes)
            
            return (
                <div key={post.id} className="pointcpLinksList">
                    <Link to={`${slug}/${post.id}`} post_id={post.id} className="pointcpLinks">
                        <li>
                            <span>{post.attributes.title}</span>
                            <span>&nbsp;</span>
                            <span>- by {post.attributes.author}</span>
                            <span>&nbsp;</span>
                            <span>| {moment
                            .parseZone(post.attributes.created_at)
                            .format("MMMM DD, YYYY")}</span>
                        </li>
                    </Link>
                </div>
            )
        })
        return (

            <div className="board">
                <div className="board-header">
                    <h1>SEARCH RESULTS</h1>
                </div>
                <div key={props.search} className="pointcpArchives">
                    <div>
                        <ol>{postsMapped}</ol>
                    </div>
                </div>
            </div>
        );

    } else {
        return(
            <div className="board">
                <div className="board-header">
                    <h1>SEARCH RESULTS</h1>
                </div>
                <div><h2>NO ARTICLES AT THIS TIME</h2><h3>Please Retry Your Search Above</h3></div>
            </div>
        )
    }
}

export default Search2;
