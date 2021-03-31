import { API_URL } from '../apiConstants';

export const addPointcp = (data) => {

  return (dispatch) => {
    let body = new FormData()
    debugger
    body.append("imageOne", data.imageOne)
    body.append("imageTwo", data.imageTwo)
    fetch(API_URL + "/image_upload_pointcp",{
    method: "PUT",
    body
    })
    .then(resp => resp.json())
    .then(json => {
      data.imageOne = json.imageOne
      data.imageTwo = json.imageTwo
      fetch(API_URL + 'pointcps', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(pointcp=> dispatch({type: 'ADD_POINTCP', payload: pointcp}))
    })
  }
}


