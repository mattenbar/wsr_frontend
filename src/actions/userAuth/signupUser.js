import { API_URL } from '../../apiConstants';

export const POST_USER = "POST_USER"
export const POST_USER_SUCCESS = "POST_USER_SUCCESS"
export const POST_USER_ERRORS = "POST_USER_ERRORS"
export const POST_USER_FAILURE = "POST_USER_FAILURE"

export const signupUser = ({ first_name, last_name, email, password, company_name }) => (dispatch) => {
    // console.log(user_name)
    dispatch({ type: POST_USER })
    
    fetch(API_URL + `/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            company_name
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.user !== undefined) {
            localStorage.setItem("token", data.jwt)
            alert("Successfully Signed Up")
            return dispatch({ type: POST_USER_SUCCESS, payload: data })
        } else {
            alert(data.errors.map(error => error))
            return dispatch({ type: POST_USER_ERRORS, payload: data })
        }
    })
    .catch(err => {
        alert("Unable to SignUp At This Time")
        return dispatch({ type: POST_USER_FAILURE, payload: err })
    })
}