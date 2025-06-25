
function useState(initialValue) {
    let state;
    if (state === undefined) {
        state = initialValue
    }

    function setState(newValue) {
        state = newValue
    }

    return [() => state, setState]
}


const [count, setCount] = useState(1)

console.log(count())
setCount(count() + 1)
console.log(count());

setCount(10)
console.log(count());



