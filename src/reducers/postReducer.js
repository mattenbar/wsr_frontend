export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            console.log(
                "WE MADE IT INTO POSTS REDUCER, YAY!",
                action.type,
                action.payload
            );
            return state.concat(action.payload.post.data);

        default:
            return state;
    }
}
