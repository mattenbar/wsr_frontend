import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/addPost';


class PcPInput extends React.Component {

  state = {
    post: {
      titleOne: '',
      contentOne: '',
      authorOne: '',
      imageOne: {},
      titleTwo: '',
      contentTwo: '',
      authorTwo: '',
      imageTwo: {}
    }
    }
  
  handlePostChange = (event) => {
    let post = {...this.state.post}
    let currentState = post
    let {name, value} = event.target 
    currentState[name] = value
    this.setState({
      post: currentState
    })
  }

  handleImageOneChange = (event) => {
    let post = {...this.state.post}
    let currentState = post
    currentState["imageOne"] = event.target.files[0]
    this.setState({
      post: currentState
    })
  }

  handleImageTwoChange = (event) => {
    let post = {...this.state.post}
    let currentState = post
    currentState["imageTwo"] = event.target.files[0]
    this.setState({
      post: currentState
    })
  }

  handlePostSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddPost(this.state.post)
    this.setState({
      post: {
        titleOne: '',
        contentOne: '',
        authorOne: '',
        imageOne: {},
        titleTwo: '',
        contentTwo: '',
        authorTwo: '',
        imageTwo: {}
      }
    })
  }
  

  render(){
      return (
        <div className="postInput">
          <form onSubmit={this.handlePostSubmit} >
            <div className="postForm">
              <label>Title One</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.title} name="titleOne" />
            </div>
            <div className="postForm">
              <label>Author One</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.author} name="authorOne" />
            </div>
            <div className="postForm">
              <label>Content One</label>
              <textarea onChange={this.handlePostChange} type="textarea" value={this.state.post.content} name="contentOne" />
            </div>  
            <div className="postForm">
              <label>Image Two</label>
              <input id="files-upload" type="file"  accept="image/*" onChange={this.handleImageTwoChange} name="imageTwo"/>
            </div> 

            <div className="postForm">
              <label>Title Two</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.title} name="titleTwo" />
            </div>
            <div className="postForm">
              <label>Author Two</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.author} name="authorTwo" />
            </div>
            <div className="postForm">
              <label>Content Two</label>
              <textarea onChange={this.handlePostChange} type="textarea" value={this.state.post.content} name="contentTwo" />
            </div>  
            <div className="postForm">
              <label>Image Two</label>
              <input id="files-upload" type="file"  accept="image/*" onChange={this.handleImageTwoChange} name="imageTwo"/>
            </div> 

            <button type="submit">Submit</button>
          </form>
        </div>
      ) 
  }
}

function mSTP(state){
  return {
    posts: state.posts,
  }
}

function mDTP(dispatch){
  return {
    dispatchAddPost: (post) => dispatch(addPost(post)),
    dispatchAddImage: (formData) => dispatch(addPost(formData))
  }
}


export default connect(mSTP, mDTP)(PostInput)