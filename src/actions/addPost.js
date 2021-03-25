export const addPost = (data) => {

  return (dispatch) => {
    debugger
    let body = new FormData()
    body.append("image", data.image)
    fetch("http://localhost:3000/api/v1/image_upload",{
    method: "PUT",
    body
    })
    .then(resp => resp.json())
    .then(json => {
      data.image = json.image
      fetch('http://localhost:3000/api/v1/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(post=> dispatch({type: 'ADD_POST', payload: post}))
    })

    
  }

}