import React from 'react'
import PostInput from './postInput'
import PointcpInput from './pointcpInput'
import InputFeatures from './inputFeatures'
import InputAd from './inputAd'
import InputShowads from './inputShowads'



function admin(props) {
  return (
      <div>
        <PostInput posts={props.posts} categories={props.categories}/>
        <br/><br/>
        <PointcpInput />
        <br/><br/>
        <InputFeatures posts={props.posts} features={props.features}/>
        <br/><br/>
        <InputAd />
        <br/><br/>
        <InputShowads ads={props.ads} />
        <br/><br/>
      </div>
  );
}

export default admin;