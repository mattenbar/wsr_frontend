import React from 'react';
import {connect} from 'react-redux';
import {addPointcp} from '../../actions/addPointcp';


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
              <label>Content One</label>
              <textarea onChange={this.handlePointcpChange} type="textarea" value={this.state.pointcp.content} name="contentOne" />
            </div>  
            <div className="pointcpForm">
              <label>Image One</label>
              <input id="files-upload" type="file"  accept="image/*" onChange={this.handleImageOneChange} name="imageTwo"/>
            </div> 

            <div className="pointcpForm">
              <label>Title Two</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.title} name="titleTwo" />
            </div>
            <div className="pointcpForm">
              <label>Author Two</label>
              <input onChange={this.handlePointcpChange} type="text" value={this.state.pointcp.author} name="authorTwo" />
            </div>
            <div className="pointcpForm">
              <label>Content Two</label>
              <textarea onChange={this.handlePointcpChange} type="textarea" value={this.state.pointcp.content} name="contentTwo" />
            </div>  
            <div className="pointcpForm">
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