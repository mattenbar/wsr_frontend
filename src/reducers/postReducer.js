export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            
            return state.concat(action.payload);

        default:
            return state;
    }
}

