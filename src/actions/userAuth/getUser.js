import { API_URL } from '../../apiConstants';

export const GET_USER = "POST_USER"
export const GET_USER_SUCCESS = "POST_USER_SUCCESS"
export const GET_USER_ERRORS = "POST_USER_ERRORS"
export const GET_USER_FAILURE = "POST_USER_FAILURE"

export const getUser = (token) => (dispatch) => {
    dispatch({ type:GET_USER })
    
    fetch(API_URL + `/auto_login`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // debugger
        if (data.id !== undefined) {
            // debugger
            return dispatch({ type: GET_USER_SUCCESS, payload: data })
        } else {
            alert(data.errors.map(error => error))
            return dispatch({ type: GET_USER_ERRORS, payload: data })
        }
    })
    .catch(err => {
        alert("Unable To Veryify User At This Time")
        return dispatch({ type: GET_USER_FAILURE, payload: err })
    })
}
