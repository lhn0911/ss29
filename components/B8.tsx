import React, { useState } from 'react';

const Exercise07 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      
      <button onClick={handleIncrement}>Click {count} lần</button>
    </div>
  );
};

export default Exercise07;
