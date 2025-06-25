// customUseState.js

function createUseState() {
  let state;
  const listeners = [];

  function useState(initialValue) {
    // Initialize state only once
    if (state === undefined) {
      state = initialValue;
    }

    function setState(newValue) {
      state = newValue;
      // Call all listeners (like re-renders)
      listeners.forEach((listener) => listener(state));
    }

    return [() => state, setState];
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return { useState, subscribe };
}

// Example usage
const { useState, subscribe } = createUseState();

const [getCount, setCount] = useState(0);

// Subscribe to state changes
subscribe((newCount) => {
  console.log("State changed:", newCount)4;
});

// Using the state
console.log("Initial count:", getCount()); // 0
setCount(1); // State changed: 1
setCount(2); // State changed: 2
