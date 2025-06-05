// action types
const UPDATE_USER = "UPDATE_USER"
const UPDATE_CONTACT = "UPDATE_CONTACT"

// store
class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(update) {
        this.state = this.reducer(this.state, update)
    }
}


// reducer
const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state, newContact) => [...state, newContact]
const userReducer = (state, update) => merge(state, update)

const reducer = (state, action) => {
    if (action.type === UPDATE_USER) {
        return merge(
            state, 
            {user: userReducer(state.user, action.payload)}
        )
    }

    if (action.type === UPDATE_CONTACT) {
        return merge(
            state,
            {contact: contactReducer(state.contact, action.payload)}
        )
    }
}

// action creators
const userUpdate = update => ({
    type: UPDATE_USER,
    payload: update
})

const contactUpdate = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

// update store
const store = new Store(reducer, {user:{}, contact:[]})
store.dispatch(userUpdate({bar: "bar"}))
store.dispatch(userUpdate({foo: "foo"}))
store.dispatch(userUpdate({zar: "zar"}))

store.dispatch(contactUpdate({name: "shahrukh", number:"0987654321"}))
store.dispatch(contactUpdate({name: "rao", number:"0987654321"})) 

console.log(store.getState())