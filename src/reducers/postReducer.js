export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            
            return state.concat(action.payload.post.data);

        case 'ADD_POST':
            const post = action.payload
            console.log(post)
            // debugger
            return state.concat(action.payload);
            // const job = action.payload
            // return { ...state, jobs: [job, ...state.jobs] }

        case 'ADD_IMAGE':
            debugger
            return state.concat(action.payload)
            
            

        default:
            return state;
    }
}

