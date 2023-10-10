import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { postReducer } from './reduser'

const rootReducer = combineReducers({
    posts: postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))