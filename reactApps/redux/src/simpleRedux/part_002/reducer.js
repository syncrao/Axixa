import { combineReducers } from 'redux'
import { UPDATE_CONTACT, UPDATE_USER } from './action.js'

// reducer
const merge = (prev, next) => Object.assign({}, prev, next)


const userReducer = (state = {}, action) => {
    if(action.type === UPDATE_USER) return merge(state, action.payload)
    if(action.type === UPDATE_CONTACT) return merge(state, {recentContact:action.payload})
    return state
}

const contactReducer = (state = [], action) => {
    if(action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const reducer = combineReducers({
   user: userReducer,
   contact: contactReducer
})

export default reducer;



