import React from 'react'
import PostInput from './postInput'
import PointcpInput from './pointcpInput'



function admin(props) {
  return (
      <div>
        <PostInput posts={props.posts} categories={props.categories}/>
        {/* <PointcpInput /> */}
        
      </div>
  );
}

export default admin;