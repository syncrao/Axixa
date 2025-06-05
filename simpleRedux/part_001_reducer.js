const merge = (prev, next) => Object.assign({}, prev, next)
const reducer = (store, update) => merge(store, update)
// const reducer = (state, update) => ({...state, ...update}) 

let state = {}
state = reducer(state, { foo: "bar" })
state = reducer(state, { bar: "baz" })
state = reducer(state, { foo: "baz" })

console.log(state)