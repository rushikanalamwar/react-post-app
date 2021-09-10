import { GET_POST, GET_COMMENT } from './../actions/action.types';
const initstate = {};

export default function postReducer(state=initstate, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POST: return {...state, post: payload }
        case GET_COMMENT: return {...state, comments: payload }    
        default: return state
    }
}