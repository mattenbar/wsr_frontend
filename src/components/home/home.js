import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from "react-router-dom"

//importing components for home
// eslint-disable-next-line
import LinksBarWeekOne from './linksbars/linksBarWeekOne'
// eslint-disable-next-line
import LinksBarWeekTwo from './linksbars/linksBarWeekTwo'
// eslint-disable-next-line
import LinksBarWeekThree from './linksbars/linksBarWeekThree'
// eslint-disable-next-line
import LinksBar from './linksBar';
import Carousel from './carousel';
import Features from './features';
// eslint-disable-next-line
import NewsMakers from './newsMakers';// eslint-disable-next-line
import CapitalConnections from './capitalConnections';// eslint-disable-next-line
import Transactions from './transactions';// eslint-disable-next-line
import DigitalDomain from './digitalDomain';

import ThisIssue from './thisIssue';
import LastIssue from './lastIssue';

class Home extends Component {
  componentDidMount(){
    document.title = "Wealth Solutions Report";
  }

  render(){

    return(
      <div className="home-container">
        {/* <LinksBarWeekOne /> */}
        <LinksBarWeekTwo />
        {/* <LinksBarWeekThree /> */}
        {/* <LinksBar /> */}
        <Carousel />
        <Features />
        <div className="home-triple-row-grid" >
          <div className="newsmakers-transactions" >
            {/* <CapitalConnections /> */}
            {/* <NewsMakers /> */}
            {/* <DigitalDomain /> */}
            {/* <Transactions /> */}
          </div>
          {/* to change amount of posts in carousel change number below(keep it negative for most recent) */}
          {this.props.posts.length > 0 && 
          <>
            <ThisIssue posts={this.props.posts.slice(-9)} />
            <LastIssue posts={this.props.posts.slice(-14, -9)} />
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