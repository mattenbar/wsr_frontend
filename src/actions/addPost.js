import { API_URL } from '../apiConstants';

export const addPost = (data) => {
  // debugger
  return ((dispatch) => {
    // debugger
    
    fetch(API_URL + '/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
      // body: JSON.stringify({
      //     title: data.title,
      //     author: data.author,
      //     content: data.content,
      //     category_id: data.category_id
      //   })
    })
    .then(response => response.json())
    .then(data=> {
      dispatch({type: 'ADD_POST', payload: data})
    })
  })
}