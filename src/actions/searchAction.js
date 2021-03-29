export const SET_SEARCHTERM = "SET_SEARCHTERM"
export const GET_SEARCHTERM = "GET_SEARCHTERM"


export const searchAction = (data) => { 
    return (dispatch) => {
        dispatch({ type: SET_SEARCHTERM, payload: data })
    }
}

export const getSearch = () => (dispatch) => {
    dispatch({ type: GET_SEARCHTERM })
}