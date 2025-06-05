import { createStore } from 'redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducers from './reducer.js'
import doit from '../../redux/index.js';
import { contactUpdate, userUpdate } from './action.js'

const rootReducer = combineReducers({
    ...reducers,
    doit
})

// store

const store = configureStore({reducer:rootReducer})
store.dispatch(userUpdate({bar: "bar"}))
store.dispatch(userUpdate({foo: "foo"}))
store.dispatch(userUpdate({zar: "zar"}))

store.dispatch(contactUpdate({name: "shahrukh", number:"0987654321"}))
store.dispatch(contactUpdate({name: "rao", number:"0987654321"})) 

console.log(store.getState())

export default store;

