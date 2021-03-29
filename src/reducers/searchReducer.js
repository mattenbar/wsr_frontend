import { SET_SEARCHTERM, GET_SEARCHTERM } from '../actions/searchAction';
import { SET_FILTERED_POSTS } from '../actions/setFilteredPosts';

const initialState = {
    search: "",
    filteredPosts: []
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

        case SET_FILTERED_POSTS:
            // state.filteredPosts = action.payload
            return { ...state, filteredPosts: action.payload }
            
        default:
            return state
    }
}