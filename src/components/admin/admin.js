import React from 'react'
import PostInput from './postInput'
import PointcpInput from './pointcpInput'
import InputFeatures from './inputFeatures'
import InputAd from './inputAd'
import InputShowads from './inputShowads'
import {useSelector} from 'react-redux'


function Admin(props) {

  const admin = useSelector(state=>{
    return state.user.user.admin
  })

  if (admin){
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
  }else{
    return(
      <div>
        <h1>MUST BE ADMIN TO ACCESS</h1>
      </div>
    )
  }
  
}

export default Admin;