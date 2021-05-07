import {EDIT_STATSHOT} from "../actions/editStatshot";

export default function manageStatshots(state = [], action) {
    switch (action.type) {
        case 'ADD_STATSHOT':
            window.location.href = `/Statshots`;
            return state;

        case EDIT_STATSHOT:
            window.location.reload();
            return {...state, state: state.map(statshot => parseInt(statshot.id) === action.payload.statshot.id ? action.payload.statshot : statshot)}

        default:
            return state;
    }
}

