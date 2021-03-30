import { API_URL } from '../apiConstants';

export const addAd = (data) => {

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
      fetch(API_URL + '/ads', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(ad=> {
      if (ad.success) {
        alert(ad.success)
        dispatch({type: 'ADD_AD', payload: ad})
      } else if (ad.errors) {
      
      alert(ad.errors.map(error => error))
      }
    })
    })

    
  }

}