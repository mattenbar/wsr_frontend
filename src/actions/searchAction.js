export const searchAction = (data) => { 
    return (dispatch) => {
        console.log("searchAction", data)
        dispatch({ type: 'SET_SEARCHTERM', payload: data })
    }
}