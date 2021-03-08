const FETCH_POSTS = "FETCH_POSTS"

export function fetchPosts(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/posts")
      .then(res => res.json())
      .then(postsObj => {
        dispatch({type: FETCH_POSTS, payload: postsObj})
      })
    }

}