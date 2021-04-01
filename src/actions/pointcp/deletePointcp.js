import { API_URL } from '../../apiConstants';

export const DELETE_POINTCP = "DELETE_POINTCP"

export const deletePointcp = (id) => {
    
    return (dispatch) => {
        return fetch(API_URL + `/pointcps/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(pointcpObj => {
            if (pointcpObj.success) {
                alert(pointcpObj.success)
                dispatch({type: DELETE_POINTCP, payload: pointcpObj})
            } else if (pointcpObj.error) {
                alert(pointcpObj.error)
            }
        })
    }
}

