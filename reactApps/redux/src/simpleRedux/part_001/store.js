import { createStore, combineReducers } from 'redux'
// action types
const UPDATE_USER = "UPDATE_USER"
const UPDATE_CONTACT = "UPDATE_CONTACT"


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

// action creators
const userUpdate = update => ({
    type: UPDATE_USER,
    payload: update
})

const contactUpdate = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

// store
const store = createStore(reducer, {user:{}, contact:[]})
store.dispatch(userUpdate({bar: "bar"}))
store.dispatch(userUpdate({foo: "foo"}))
store.dispatch(userUpdate({zar: "zar"}))

store.dispatch(contactUpdate({name: "shahrukh", number:"0987654321"}))
store.dispatch(contactUpdate({name: "rao", number:"0987654321"})) 

console.log(store.getState())