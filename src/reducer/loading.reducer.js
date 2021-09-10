import { START_LOADING, STOP_LOADING } from 'actions';

const initstate = {
    loading: false,
    msg: ''
};

export default function loadingReducer(state=initstate, action) {
    const { type, payload } = action;
    switch (type) {
        case START_LOADING: return {...state, loading: true, msg: payload }
        case STOP_LOADING: return {...state, loading: false, msg: ''}
        default: return state
    }
}