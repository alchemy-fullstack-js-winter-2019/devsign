import { GET_USER_TWEETS } from '../actions/Tweets';

const initialState = [];


export default function reducer(state = initialState, { type, payload }) {
    switch(type) {
        case GET_USER_TWEETS:
            return payload;
        default:
            return state;
    }
}
