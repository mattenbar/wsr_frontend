import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from "react-router-dom"

//importing components for home
import LinksBar from './linksBar'

class Home extends Component {
  render(){
    return(
      
      <div>
        <LinksBar />
        We are in Home component
      </div>
    )
  }
}

function mSTP(state){
  return {
    posts: state.posts,
    
  }
}

export default connect(mSTP)(Home)