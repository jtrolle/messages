import { messages } from '../fixtures';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages() {
    return {
        type: FETCH_MESSAGES,
        payload: messages
    }
}

export function createMessage(state) {
    const message = {
    	body: state.message,
    	isPublic: state.isPublic
    };

    return {
        type: CREATE_MESSAGE,
        payload: message
    }
}
