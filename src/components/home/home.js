import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from "react-router-dom"

//importing components for home
import LinksBar from './linksBar';
import Carousel from './carousel';
import Features from './features';
import NewsMakers from './newsMakers';
import Transactions from './transactions';
import ThisIssue from './thisIssue';
import LastIssue from './lastIssue';

class Home extends Component {
  render(){
    return(
      
      <div className="home-container">
        <LinksBar />
        <Carousel />
        <Features />
        <div className="home-triple-row-grid" >
          <div className="newsmakers-transactions" >
            <NewsMakers />
            <Transactions />
          </div>
          <ThisIssue />
          <LastIssue />
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