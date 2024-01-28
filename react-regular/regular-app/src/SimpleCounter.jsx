import React, { useState, useEffect } from 'react';

const SimpleCounter = () => {
  // Define state variable for the counter
  const [counter, setCounter] = useState(0);

  // useEffect to increment the counter every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Render the counter value
  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default SimpleCounter;
