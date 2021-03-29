import React from 'react'
import PostInput from './postInput'
import PointcpInput from './pointcpInput'
import InputFeatures from './inputFeatures'



function admin(props) {
  return (
      <div>
        <PostInput posts={props.posts} categories={props.categories}/>
        <br/>
        <PointcpInput />
        <br/><br/>
        <InputFeatures posts={props.posts} features={props.features}/>
        <br/><br/>
      </div>
  );
}

export default admin;