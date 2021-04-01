import { API_URL } from '../apiConstants';

export const DELETE_POST = "DELETE_POST"

export const deletePost = (id) => {
    
    return (dispatch) => {
        return fetch(API_URL + `/posts/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(postObj => {
            console.log("postObj", postObj)
            if (postObj.success) {
                alert(postObj.success)
                dispatch({type: DELETE_POST, payload: postObj})
            } else if (postObj.error) {
                alert(postObj.error)
            }
        })
    }
}

