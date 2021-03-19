export const searchAction = (data) => { 
    return (dispatch) => {
        console.log("search action", data) //data = "searchTerm"

        dispatch({ type: 'SET_SEARCHTERM', payload: data })
    }
}