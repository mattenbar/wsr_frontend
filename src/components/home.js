import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from "react-router-dom"

class Home extends Component {
  render(){
    return(
      <div>
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