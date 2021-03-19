
export default function manageSearch (state = [], action) {
    switch (action.type) {
        case 'SET_SEARCHTERM':
            console.log("search reducer", action.payload)
            return state.concat(action.payload)
        default:
            return state
    }
}