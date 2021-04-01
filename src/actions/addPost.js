
import { API_URL } from '../apiConstants';


export const addPost = (data) => {

  return (dispatch) => {
    let body = new FormData()
    body.append("image", data.image)
    fetch(API_URL + '/image_upload',{
    method: "PUT",
    body
    })
    .then(resp => resp.json())
    .then(json => {
      data.image = json.image
      fetch(API_URL + '/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(post=> {
      if (post.success) {
        alert(post.success)
        dispatch({type: 'ADD_POST', payload: post})
        
      } else if (post.errors) {
      
      alert(post.errors.map(error => error))
      }
    })
    })

    
  }

}