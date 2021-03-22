
export default function manageSearch (state = [], action) {
    switch (action.type) {

        case 'SET_SEARCHTERM':
            console.log("searchReducer", state, action.payload)
            return state = action.payload
            
        default:
            return state
    }
}