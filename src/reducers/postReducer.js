import {DELETE_POST} from '../actions/deletePost';
import {EDIT_POST} from '../actions/editPost';

export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            return state.concat(action.payload);

        case DELETE_POST:
            return state = action.payload.post.data

        case EDIT_POST:
            return {...state, state: state.map(post => parseInt(post.id) === action.payload.post.id ? action.payload.post : post)}

        default:
            return state;
    }
}

