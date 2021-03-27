import {DELETE_POST} from '../actions/deletePost';

export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            return state.concat(action.payload);

        case DELETE_POST:
            return state = action.payload.post.data

        default:
            return state;
    }
}

