import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from "react-router-dom"

//importing components for home
import LinksBarWeekOne from './linksbars/linksBarWeekOne'
import LinksBarWeekTwo from './linksbars/linksBarWeekTwo'
import LinksBarWeekThree from './linksbars/linksBarWeekThree'
import LinksBar from './linksBar';
import Carousel from './carousel';
import Features from './features';

import NewsMakers from './newsMakers';
import CapitalConnections from './capitalConnections';
import Transactions from './transactions';
import DigitalDomain from './digitalDomain';

import ThisIssue from './thisIssue';
import LastIssue from './lastIssue';

class Home extends Component {
  render(){

    return(
      console.log("home", this.props.posts),
      <div className="home-container">
        <LinksBarWeekOne />
        {/* <LinksBarWeekTwo /> */}
        {/* <LinksBarWeekThree /> */}
        {/* <LinksBar /> */}
        <Carousel />
        <Features />
        <div className="home-triple-row-grid" >
          <div className="newsmakers-transactions" >
            <CapitalConnections /> 
            {/* <NewsMakers /> */}
            <DigitalDomain />
            {/* <Transactions /> */}
          </div>
          {/* to change amount of posts in carousel change number below(keep it negative for most recent) */}
          {this.props.posts.length > 0 && 
          <>
            <ThisIssue posts={this.props.posts.slice(-5)} />
            <LastIssue posts={this.props.posts.slice(-10, -5)} />
          </>
        }
        </div>
      </div>
    )
  }
}

function mSTP(state){
  return {
    posts: state.posts,
    user: state.user
  }
}

export default connect(mSTP)(Home)