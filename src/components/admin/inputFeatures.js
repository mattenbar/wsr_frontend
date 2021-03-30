import React from 'react'
import { connect } from 'react-redux'
import {editFeature} from '../../actions/editFeature'


class InputFeatures extends React.Component{

  state = {
    feature: {
      id: 0,
      post_id: 0
    },

  }
  
  handleFeatureChange = (event) => {
    let feature = {...this.state.feature}
    let currentState = feature
    let {name, value} = event.target
    currentState[name] = value
    this.setState({
      feature: currentState
    })
  }



  handleFeatureSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchEditFeature(this.state.feature)
    this.setState({
      feature: {
        id: 0,
        post_id: 0
      }
    })
  }

  render(){
    let p = this.props.posts.map(post => 
      <option key={post.id} value={post.id} name="post_id" onChange={this.handleChange}> 
        {post.id} - {post.attributes.title}
      </option>)

      p = p.reverse()


    if (p){
      
      return (
        <div className="FeaturesInput">
          <h1>Select Features</h1>
          <form onSubmit={this.handleFeatureSubmit} >
            <div className="postForm">
              <label>Select Feature:</label>
              <select value={this.state.feature.feature_id} name="id" onChange={this.handleFeatureChange}>
              <option >Choose Feature...</option>
              <option value={1} name="id" onChange={this.handleChange}> 
                1 - Left Feature
              </option>
              <option value={2} name="id" onChange={this.handleChange}> 
                2 - Main Feature
              </option>
              <option value={3} name="id" onChange={this.handleChange}> 
                3 - Right Feature
              </option>
              </select>
              <br/>
              <label>Select Featured Post:</label>
              <select value={this.state.post_id} name="post_id" onChange={this.handleFeatureChange}>
                <option >Choose Post...</option>
                {p}
              </select>
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
    features: state.features,
  }
}

function mDTP(dispatch){
  return {
    dispatchEditFeature: (feature) => dispatch(editFeature(feature))
  }
}

export default connect(mSTP, mDTP)(InputFeatures)