
export default function manageSearch (state = [], action) {
    switch (action.type) {

        case 'SET_SEARCHTERM':
            return state.concat(action.payload)
            
        default:
            return state
    }
}