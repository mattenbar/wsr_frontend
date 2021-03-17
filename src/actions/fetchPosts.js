import { API_URL } from '../apiConstants';

const FETCH_POSTS = "FETCH_POSTS"

export function fetchPosts(data){

  return function(dispatch){
    
    fetch(API_URL + "/posts")
      .then(res => res.json())
      .then(postsObj => {
        dispatch({type: FETCH_POSTS, payload: postsObj})
      })
    }

}