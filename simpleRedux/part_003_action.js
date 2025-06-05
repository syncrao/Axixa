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

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state, newContact) => [...state, newContact]
const userReducer = (state, update) => merge(state, update)

const reducer = (state, action) => {
    if (action.type === "UPDATE_USER") {
        return merge(
            state, 
            {user: userReducer(state.user, action.payload)}
        )
    }

    if (action.type === "UPDATE_CONTACT") {
        return merge(
            state,
            {contact: contactReducer(state.contact, action.payload)}
        )
    }
}

const store = new Store(reducer, {user:{}, contact:[]})
store.dispatch({ type: "UPDATE_USER", payload:{bar: "bar"}})
store.dispatch({ type: "UPDATE_USER", payload:{foo: "foo"}})
store.dispatch({ type: "UPDATE_USER", payload:{zar: "zar"}})

store.dispatch({type: "UPDATE_CONTACT", payload:{name: "shahrukh", number:"0987654321"}})
store.dispatch({type: "UPDATE_CONTACT", payload:{name: "shahrukh", number:"0987654321"}}) 

console.log(store.getState())