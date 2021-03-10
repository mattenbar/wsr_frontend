import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from "react-router-dom"

//importing components for home
import LinksBar from './linksBar'

class Home extends Component {
  render(){
    return(
      
      <div className="home-container">
        <LinksBar />
        <div className="home-1">
          We are in Home component
        </div>
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