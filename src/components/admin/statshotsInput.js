import React from 'react';
import {connect} from 'react-redux';
import {addStatshot} from '../../actions/addStatshot';
import { Editor } from '@tinymce/tinymce-react';


class StatshotsInput extends React.Component {

  state = {
    statshot: {
      content: '',
      image: {},
    }
  };

  handleImageChange = (event) => {
    let statshot = {...this.state.statshot}
    let currentState = statshot
    currentState["image"] = event.target.files[0]
    this.setState({
      statshot: currentState
    })
  }

  handleEditorChange = (content, editor) => {
    let statshot = {...this.state.statshot}
    let currentState = statshot
    currentState["content"] = content
    this.setState({
      statshot: currentState
    })
  }

  



  handleStatshotSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddStatshot(this.state.statshot)
    
    this.setState({
      statshot: {
        content: '',
        image: '',
      }
    })
  }
  

  render(){
    return (
      <div className="postInput">
        <h1>Input Statshots</h1>
        <form onSubmit={this.handleStatshotSubmit} >
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
                width: 1280,
                height: 800,
                menubar: ['insert', 'edit'],
                default_link_target: '_blank',
                image_title: true,
                image_caption: true,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                  'image',
                  'media',
                  'link',
                  "imagetools",
                  'paste',
                  'code'
                ],
                toolbar: 'undo redo | styleselect | paste pastetext | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image media | removeformat | help | code | preview'
              }}
              onEditorChange={this.handleEditorChange}
            />
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
    categories: state.categories
  }
}

function mDTP(dispatch){
  return {
    dispatchAddStatshot: (statshot) => dispatch(addStatshot(statshot)),
    dispatchAddImage: (formData) => dispatch(addStatshot(formData))
  }
}


export default connect(mSTP, mDTP)(StatshotsInput);