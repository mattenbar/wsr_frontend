import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'

//components
import Home from './components/home'
import NavBar from './components/nav'









class App extends React.Component{

  componentDidMount(){
    this.props.dispatchFetchPosts()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path ="/" render={()=> <Home posts={this.props.posts} />}/>
        </Switch>
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