import { base, getPost, GET_COMMENT } from "actions"
import axios from "axios"

export const getComments = () => async dispatch => {
    try {
        const { data } = await axios.get(`${base}/api/v1/comment`)
        dispatch({ type: GET_COMMENT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateComment = (formdata) => async dispatch => {
    try {
        await axios.put(`${base}/api/v1/comment/${formdata.id}`, formdata)
        dispatch(getPost())
    } catch (error) {
        console.log(error.message)
    }
}

export const replyToComment = (formdata, id) => async dispatch => {
    try {
        const { data } = await axios.post(`${base}/api/v1/comment`, formdata);
        // console.log(id)
        const res = await axios.get(`${base}/api/v1/comment/${id}`)
        console.log(res.data)
        await axios.put(`${base}/api/v1/comment/${id}`, {
            "comments": [...res.data.comments, data.id]
        })
        dispatch(getPost())
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteComment = (id) => async dispatch => {
    try {
        console.log(id)
        const { data} = await axios.delete(`${base}/api/v1/comment/${id}`)
        console.log(data)
        dispatch(getPost())
    } catch (error) {
        console.log(error.message)
        console.log(error.response.data)
    }
}

export const createComment = (formdata, post) => async dispatch => {
    try {
        const { data } = await axios.post(`${base}/api/v1/comment`, formdata)
        const body = { ...post, comment: [...post.comment, data] }
        await axios.put(`${base}/api/v1/post/${post._id}`, body);
        dispatch(getPost())
    } catch (error) {
        console.log(error.message)
    }
}