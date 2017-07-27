import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/messages';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            const index = (state.slice(-1).pop()["id"]) || 0;
            const message = {...action.payload, id: index + 1}
            const newState = [...state, message];

            return newState;
        default:
            return state;
    }
}