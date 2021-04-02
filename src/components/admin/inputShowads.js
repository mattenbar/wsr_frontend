import React from 'react'
import { connect } from 'react-redux'
import {editShowads} from '../../actions/editShowads'


class InputShowads extends React.Component{

  state = {
    showad: {
      id: 0,
      ad_id: 0
    },

  }
  
  handleShowadChange = (event) => {
    let showad = {...this.state.showad}
    let currentState = showad
    let {name, value} = event.target
    currentState[name] = value
    this.setState({
      showad: currentState
    })
  }



  handleShowadSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchEditShowads(this.state.showad)
    this.setState({
      showad: {
        id: 0,
        ad_id: 0
      }
    })
  }

  render(){
    let ads = this.props.ads.map(ad => 
      <option key={ad.id} value={ad.id} name="ad_id" onChange={this.handleChange}> 
        {ad.id} - {ad.attributes.title} - {ad.attributes.company}
      </option>)

      ads = ads.reverse().slice(0,10)


    if (ads){
      
      return (
        <div className="ShowadsInput">
          <h1>Select Ads To Display</h1>
          <form onSubmit={this.handleShowadSubmit} >
            <div className="postForm">
              <label>Select Left Ad or Right Ad:</label>
              <select value={this.state.showad.showad_id} name="id" onChange={this.handleShowadChange}>
              <option >Choose Side...</option>
              <option value={1} name="id" onChange={this.handleChange}> 
                1 - Left Ad
              </option>
              <option value={2} name="id" onChange={this.handleChange}> 
                2 - Right Ad
              </option>
              </select>
              <br/>
              <label>Select Ad:</label>
              <select value={this.state.ad_id} name="ad_id" onChange={this.handleShowadChange}>
                <option >Choose Ad...</option>
                {ads}
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
    showads: state.showads,
  }
}

function mDTP(dispatch){
  return {
    dispatchEditShowads: (showad) => dispatch(editShowads(showad))
  }
}

export default connect(mSTP, mDTP)(InputShowads)