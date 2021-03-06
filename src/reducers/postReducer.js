import {DELETE_POST} from '../actions/deletePost';
import {EDIT_POST} from '../actions/editPost';
import {GetSlug} from '../actions/getSlug';

export default function managePosts(state = [], action) {
    let getSlug
   
    if (action.payload) {
        if(action.payload.post) {
            if(action.payload.post.data){
                if(action.payload.post.data.attributes) {
                    getSlug = GetSlug(action.payload.post.data.attributes)

                }
            }
        }
    }

    switch (action.type) {
        case "FETCH_POSTS":
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            window.location.href = `${getSlug}/${action.payload.post.data.id}`;
            return state

        case DELETE_POST:
            return state = action.payload.posts.data

        case EDIT_POST:
            
            window.location.reload()
            return {...state, state: state.map(post => parseInt(post.id) === action.payload.post.id ? action.payload.post : post)}

        default:
            return state;
    }
}

