import { LOADING_POINTCP, GET_POINTCP_SUCCESS, GET_POINTCP_ERRORS, GET_POINTCP_FAILURE } from '../actions/pointcp/fetchPointcps';

const initialState = {
    pointCPPosts: []
};

export default function managePcps(state = initialState, action) {
    switch (action.type) {
        case "FETCH_POINTCPS":
            return state.concat(action.payload.pointcp.data);

        case LOADING_POINTCP:
          
            return{...state}

        case GET_POINTCP_SUCCESS:
          
            return { ...state, pointCPPosts: action.payload.pointcps.data }

        case GET_POINTCP_ERRORS:
          
            return{...state}

        case GET_POINTCP_FAILURE:
            return{...state}

        case "ADD_POINTCP":
            return state.concat(action.payload);

        default:
            return state;
    }
}
