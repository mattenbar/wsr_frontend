import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'

//components
import Home from './components/home'









class App extends React.Component{

  componentDidMount(){
    this.props.dispatchFetchPosts()
  }

  render(){
    return (
      <div className="App">
        <Switch>
        <Route exact path ="/" render={()=> <Home />}/>
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