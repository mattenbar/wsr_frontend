import { SET_SEARCHTERM, GET_SEARCHTERM } from '../actions/searchAction';

const initialState = {
    search: ""
};

export default function manageSearch (state = initialState, action) {
    switch (action.type) {

        case GET_SEARCHTERM:
            return {...state}

        case SET_SEARCHTERM:
            state.search = action.payload
            return {...state}

            // let stateCopy = { ...state }
            // stateCopy.search = action.payload
            // return {stateCopy}
            
        default:
            return state
    }
}