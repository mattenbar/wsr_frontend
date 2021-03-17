export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            const post = action.payload
            debugger
            return state.concat(action.payload);
            // const job = action.payload
            // return { ...state, jobs: [job, ...state.jobs] }
            

        default:
            return state;
    }
}

