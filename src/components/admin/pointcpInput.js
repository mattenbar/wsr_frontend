import React from 'react';
import {connect} from 'react-redux';
import {addPointcp} from '../../actions/addPointcp';
import { Editor } from '@tinymce/tinymce-react';


class PointcpInput extends React.Component {

  state = {
    pointcp: {
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
  
  handlePointcpChange = (event) => {
    let pointcp = {...this.state.pointcp}
    let currentState = pointcp
    let {name, value} = event.target 
    currentState[name] = value
    this.setState({
      pointcp: currentState
    })
  }

  handleImageOneChange = (event) => {
    let pointcp = {...this.state.pointcp}
    let currentState = pointcp
    currentState["imageOne"] = event.target.files[0]
    this.setState({
      pointcp: currentState
    })
  }

  handleImageTwoChange = (event) => {
    let pointcp = {...this.state.pointcp}
    let currentState = pointcp
    currentState["imageTwo"] = event.target.files[0]
    this.setState({
      pointcp: currentState
    })
  }

  handleEditorOneChange = (content, editor) => {
    console.log('Content was updated:', content);
    let post = {...this.state.post}
    let currentState = post
    currentState["contentOne"] = content
    this.setState({
      post: currentState
    })
  }

  handleEditorTwoChange = (content, editor) => {
    console.log('Content was updated:', content);
    let post = {...this.state.post}
    let currentState = post
    currentState["contentTwo"] = content
    this.setState({
      post: currentState
    })
  }

  handlePointcpSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddPointcp(this.state.pointcp)
    this.setState({
      pointcp: {
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
        <div className="pointcpInput">
          <h1>Input Point Counterpoint</h1>
          <form onSubmit={this.handlePointcpSubmit} >
            <div className="pointcpForm">
              <label>Title One</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.title} name="titleOne" />
            </div>
            <div className="pointcpForm">
              <label>Author One</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.author} name="authorOne" />
            </div>
            <div className="pointcpForm">
              <label>Image One</label>
              <input id="files-upload" type="file"  accept="image/*" onChange={this.handleImageOneChange} name="imageTwo"/>
            </div>
            <div className="pointcpForm">
              <label>Content One</label>
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
                onEditorChange={this.handleEditorOneChange}
              />
            </div>   
                <br/>
                <br/>
            <div className="pointcpForm">
              <label>Title Two</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.title} name="titleTwo" />
            </div>
            <div className="pointcpForm">
              <label>Author Two</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.author} name="authorTwo" />
            </div>
            <div className="pointcpForm">
              <label>Image Two</label>
              <input id="files-upload" type="file"  accept="image/*" onChange={this.handleImageTwoChange} name="imageTwo"/>
            </div> 
            <div className="pointcpForm">
              <label>Content Two</label>
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
                onEditorChange={this.handleEditorTwoChange}
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
    pointcp: state.pointcp,
  }
}

function mDTP(dispatch){
  return {
    dispatchAddPointcp: (pointcp) => dispatch(addPointcp(pointcp)),
    dispatchAddImageOne: (formData) => dispatch(addPointcp(formData)),
    dispatchAddImageTwo: (formData) => dispatch(addPointcp(formData))
  }
}


export default connect(mSTP, mDTP)(PointcpInput)