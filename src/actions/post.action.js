import { base } from "actions"
import axios from "axios"
import { GET_POST } from './action.types';

export const getPost = (page, limit) => async dispatch => {
    try {
        const { data } = await axios.get(`${base}/api/v1/post?page=${page}&limit=${limit}`)
        dispatch({ type: GET_POST, payload: data.data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (formdata) => async dispatch => {
    try {
        await axios.post(`${base}/api/v1/post`, formdata)
        dispatch(getPost())
    } catch (error) {
        console.log(console.log(error.message))
        console.log(error.response)
    }
}