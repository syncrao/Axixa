import { combineReducers, createStore } from "redux";


export function task (state= {username:"Guest", id:"sdgsadh"}, action) {
    switch (action.type) {
        case "LOGIN" : return action.data
        default : return state
    }
}

const store = createStore(combineReducers({task}))

export default store