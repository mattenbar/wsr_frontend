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
            return { ...state, search: action.payload }

        case SET_FILTERED_POSTS:
            return { ...state, filteredPosts: action.payload }
            
        default:
            return state
    }
}