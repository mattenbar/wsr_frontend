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
        <Features features={this.props.features} posts={this.props.posts}/>
        <div className="home-triple-row-grid" >
          <div className="newsmakers-transactions" >
            <NewsMakers posts={this.props.categories["12"]}/>
            <Transactions posts={this.props.categories["13"]}/>
          </div>
          {/* to change amount of posts in carousel change number below(keep it negative for most recent) */}
          <ThisIssue posts={this.props.posts.slice(-5)}/>
          <LastIssue posts={this.props.posts.slice(-10, -5)}/>
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