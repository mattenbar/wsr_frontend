import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/addPost';
import { Editor } from '@tinymce/tinymce-react';


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

  handleEditorChange = (content, editor) => {
    let post = {...this.state.post}
    let currentState = post
    currentState["content"] = content
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
          <h1>Input Post</h1>
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
              <label>Image</label>
              <input id="files-upload" type="file" name="image" accept="image/*" onChange={this.handleImageChange} />
            </div> 
            <div className="postForm">
              <label>Content</label>
              <Editor
                apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  selector: 'textarea',
                  height: 500,
                  menubar: 'insert',
                  default_link_target: '_blank',
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'image',
                    'media',
                    'link'
                  ],
                  toolbar: 'undo redo | formatselect | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | media | removeformat | help '
                }}
                onEditorChange={this.handleEditorChange}
              />
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