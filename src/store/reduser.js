import { ADD_POST, ERROR_POSTS, GET_POSTS, GET_SELECT_POST } from "./actionsType"

const defaultState = {
    posts: [],
    error: false,
    post: []
}

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { posts: [...action.payload] }
        case ERROR_POSTS:
            return { ...state.error, error: true }
        case GET_SELECT_POST:
            return { post: { ...action.payload } }
        default:
            return state
    }
}

export const addPostAction = (payload) => ({ type: ADD_POST, payload })
export const getSelectPostAction = (payload) => ({ type: GET_SELECT_POST, payload })
export const getPostsAction = (payload) => ({ type: GET_POSTS, payload })
export const errorPostsAction = (payload) => ({ type: ERROR_POSTS, payload })
