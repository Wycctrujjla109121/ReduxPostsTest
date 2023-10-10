import axios from "axios"
import { errorPostsAction, getPostsAction, getSelectPostAction } from "./reduser"

export const getPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                dispatch(getPostsAction(responce.data))
            })
            .catch(error => {
                dispatch(errorPostsAction(error.message))
            })
    }
}

export const getSelectPost = (id) => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(responce => {
                dispatch(getSelectPostAction(responce.data))
            })
            .catch(error => {
                dispatch(errorPostsAction(error.message))
            })
    }
}