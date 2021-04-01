import React from 'react';
import { useSelector } from 'react-redux';
import {GetSlug} from '../../actions/getSlug'
import {Link} from 'react-router-dom'

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
                <div key={post.id} className="searchResultPost">
                    <li>
                        <Link to={`${slug}/${post.id}`}post_id={post.id}>
                            <h3>{post.attributes.title}</h3>
                        </Link>
                    </li>
                </div>
            )
        })
        return (
            <div key={props.search} className="searchPage">
                <div>
                    <ol>{postsMapped}</ol>
                </div>
            </div>
        );

    } else {
        return(
            <div>NO POSTS AT THIS TIME</div>
        )
    }
}

export default Search2;