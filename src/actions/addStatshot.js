
import { API_URL } from '../apiConstants';


export const addStatshot = (data) => {

  return (dispatch) => {
    let body = new FormData()
    body.append("image", data.image)
    fetch(API_URL + '/image_upload_statshots',{
    method: "PUT",
    body
    })
    .then(resp => 
      resp.json())
    .then(json => {
      data.image = json.image
      fetch(API_URL + '/statshots', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(statshot=> {
      if (statshot.success) {
        alert(statshot.success)
        dispatch({type: 'ADD_STATSHOT', payload: statshot})
        
      } else if (statshot.errors) {
      
      alert(statshot.errors.map(error => error))
      }
    })
    })

    
  }

}