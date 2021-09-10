import { STOP_LOADING, START_LOADING } from 'actions';

export const startLoading = (payload) => dispatch => dispatch({ type: START_LOADING, payload });
export const stopLoading = () => dispatch => dispatch({ type: STOP_LOADING });
