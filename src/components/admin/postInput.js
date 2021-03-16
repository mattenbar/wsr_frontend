import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../../actions/addPost'



class PostInput extends React.Component {

  state = {
    post: {
      title: '',
      content: '',
      author: '',
      image: '',
      category_id: 0
    },
    category:{
      name: ''}
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

  handlePostSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddPost(this.state.post)
    this.setState({
      post: {
        title: '',
        content: '',
        author: '',
        image: '',
        category_id: 0
      },
      category:{
        name: ''}
    })
  }
  

  render(){
    let c = this.props.categories.map(category => <option key={category.attributes.id} value={category.attributes.id} name="category_id" onChange={this.handleChange}> {category.attributes.id} - {category.attributes.name}</option>)


    if (c){
      return (
        <div >
          <form onSubmit={this.handlePostSubmit} >
            <div className="postForm">
              <label>Title</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.title} name="title" />
            </div>
            <div className="postForm">
              <label>Author</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.author} name="author" />
            </div>
            <select value={this.state.post.category_id} name="category_id" onChange={this.handlePostChange}>
              <option >Choose Category...</option>
              {c}
            </select>
            <div className="postForm">
              <label>Content</label>
              <textarea onChange={this.handlePostChange} type="textarea" value={this.state.post.content} name="content" />
            </div>   
          </form>
        </div>
      ) 
    } else {
        return <div></div>
    }
  }
}

function mSTP(state){
  return {
    posts: state.posts,
    categories: state.categories
  }
}

function mDTP(dispatch){
  return {
    dispatchAddPost: (post) => dispatch(addPost(post))
  }
}


export default connect(mSTP, mDTP)(PostInput)