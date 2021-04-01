import React from 'react';
import {connect} from 'react-redux'
import {GetSlug} from '../../actions/getSlug'
import { Link } from 'react-router-dom'

function archives(state) {

    let posts = state.posts.map(post => {
        return(
            <div >
              <li><Link to={{pathname:`${GetSlug(post.attributes)}/${post.id}`}}>{post.attributes.title} </Link></li>
            </div>
        )
    })

    return (
        <div className="archive">
            <div className="archive-header">
                <h1>ARCHIVES</h1>
            </div>
            <div className="archive-container">
                <ol>
                    {posts}
                </ol>
            </div>
        </div>
    );
}

function mSTP(state){
    return {
      posts: state.posts,
      user: state.user
    }
  }

export default connect(mSTP)(archives);