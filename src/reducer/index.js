import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
import postReducer from './post.reducer';

export default combineReducers({
    loading: loadingReducer,
    post: postReducer
});