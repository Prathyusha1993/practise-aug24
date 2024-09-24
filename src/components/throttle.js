import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // Throttle the handleClick function to fire at most once every 2 seconds (2000 ms)
  const throttledClick = throttle(handleClick, 2000);

  return (
    <div>
      <h1>Throttle Example</h1>
      <p>Button clicked: {count} times</p>
      <button onClick={throttledClick}>Click me</button>
    </div>
  );
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default App;