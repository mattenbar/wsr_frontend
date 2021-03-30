import { API_URL } from '../../apiConstants';

export const LOADING_POINTCP = "LOADING_POINTCP"
export const GET_POINTCP_SUCCESS = "GET_POINTCP_SUCCESS"
export const GET_POINTCP_ERRORS = "GET_POINTCP_ERRORS"
export const GET_POINTCP_FAILURE = "GET_POINTCP_FAILURE"

export const fetchPointcps = () => (dispatch) => {
    dispatch({ type: LOADING_POINTCP })

    fetch(API_URL + '/pointcps')
    .then(res => res.json())
    .then(pointcpObj => {
        if (pointcpObj.pointcp !== undefined) {
            return dispatch({ type: GET_POINTCP_SUCCESS, payload: pointcpObj })
        } else {
            alert(pointcpObj.errors.map(error => error))
            return dispatch({ type: GET_POINTCP_ERRORS, payload: pointcpObj })
        }
    })
    .catch(err => {
        alert("Unable To Veryify User At This Time")
        return dispatch({ type: GET_POINTCP_FAILURE, payload: err })
    })
}