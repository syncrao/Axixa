
export function doit(state = 33, action) {
    const type = action.type
    if (type === "ADD") {
        return state + action.unit;
    }
    else if (type === "REMOVE") {
        return state - action.unit;
    }
    else return state;
}
