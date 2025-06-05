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

const reducer = (store, update) => merge(store, update)

const store = new Store(reducer, {foo: "foo"})

store.dispatch({bar: "bar"})
store.dispatch({zar: "zar"})

console.log(store.getState())