import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'

//components

import Home from './components/home/home';
import NavBar from './components/navbar/nav';
import Footer from './components/footer/footer';
import Ads from './components/ads/ads';
import ContactUs from './components/contact/contact';
import AboutUs from './components/about/aboutUs';
import Partners from './components/partners/partners';
import Board from './components/board/board';
import Archives from './components/archives/archives';



class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.props.dispatchFetchPosts()
  }

  handleSignIn = (user) => {
    debugger
    this.setState({
      user: user
    })
  }

  render(){
    console.log("app", this.props)
    return (
      <div className="App">
        <NavBar handleSignIn={this.handleSignIn} />
        <Switch >
          <Route exact path ="/" render={()=> <Home posts={this.props.posts} />}/>
          <Route exact path ="/about" render={()=> <AboutUs />}/>
          <Route exact path ="/our-partners" render={()=> <Partners />}/>
          <Route exact path ="/our-board" render={()=> <Board />}/>
          <Route exact path ="/contact-us" render={()=> <ContactUs />}/>
          <Route exact path ="/archives" render={()=> <Archives />}/>
        </Switch>
        <Ads />
        <Footer />
      </div>
    );
  }
}

function mSTP(state){
  return {
    posts: state.posts,
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchPosts: (posts) => dispatch(fetchPosts(posts)),
  }
}

export default connect(mSTP, mDTP)(App);