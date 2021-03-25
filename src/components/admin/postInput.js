import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/addPost';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class PostInput extends React.Component {

  state = {
    post: {
      title: '',
      content: '',
      author: '',
      image: {},
      youtube: '',
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

  handleImageChange = (event) => {
    let post = {...this.state.post}
    let currentState = post
    currentState["image"] = event.target.files[0]
    this.setState({
      post: currentState
    })
  }

  



  handlePostSubmit = (event, editor) => {
    event.preventDefault()
    this.props.dispatchAddPost(this.state.post)
    this.setState({
      post: {
        title: '',
        content: '',
        author: '',
        image: '',
        youtube: '',
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
        <div className="postInput">
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
              <CKEditor
                name="content"
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                    let post = {...this.state.post}
                    let currentState = post
                    currentState["content"] = data
                    this.setState({
                      post: currentState
                    })
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
             
            </div>  

            <div className="postForm">
              <label>Image</label>
              <input id="files-upload" type="file" name="image" accept="image/*" onChange={this.handleImageChange} />
            </div> 

            <div className="postForm">
              <label>YouTube Link</label>
              <input onChange={this.handlePostChange} type="text" value={this.state.post.youtube} name="youtube" />
            </div> 

            <button type="submit">Submit</button>
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
    dispatchAddPost: (post) => dispatch(addPost(post)),
    dispatchAddImage: (formData) => dispatch(addPost(formData))
  }
}


export default connect(mSTP, mDTP)(PostInput)