import { POST_USER, POST_USER_SUCCESS, POST_USER_ERRORS, POST_USER_FAILURE } from '../actions/userAuth/signupUser';

const initialState = {
    isLoading: false,
    error: "",
    errors: [],
    user: {},
    jwt: "",
    loggedIn: false
};

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case POST_USER:
            return {...state, isLoading: true}

        case POST_USER_SUCCESS:
            
            return {...state, isLoading: false, user: action.payload.user, jwt: action.payload.jwt, loggedIn: true}

        case POST_USER_ERRORS:
            return {...state, isLoading: false, errors: action.payload.errors}
            
        case POST_USER_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        
        default:
            return state
    }
}

export default userReducer;