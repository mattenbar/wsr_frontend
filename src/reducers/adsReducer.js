export default function managePosts(state = [], action) {
    switch (action.type) {
        case "FETCH_ADS":
            return state.concat(action.payload.ad.data);

        case 'ADD_AD':
            return state.concat(action.payload);


        default:
            return state;
    }
}

