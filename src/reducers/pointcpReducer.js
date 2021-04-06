import { LOADING_POINTCP, GET_POINTCP_SUCCESS, GET_POINTCP_ERRORS, GET_POINTCP_FAILURE } from '../actions/pointcp/fetchPointcps';
import {EDIT_POINTCP} from '../actions/pointcp/editPointcp'

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

        case EDIT_POINTCP:
            
            window.location.reload()
            return state.concat(action.payload)

        default:
            return state;
    }
}
