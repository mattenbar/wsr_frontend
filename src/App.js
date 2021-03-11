import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'

//components
import Home from './components/home/home'
import NavBar from './components/navbar/nav'
import Footer from './components/footer/footer'
import Ads from './components/ads/ads'


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