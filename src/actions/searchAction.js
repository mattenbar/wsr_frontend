export const searchAction = (data) => { 
    return (dispatch) => {
        

        dispatch({ type: 'SET_SEARCHTERM', payload: data })
    }
}