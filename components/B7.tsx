import React, { useState } from 'react';

const IntegerArrayAdder = () => {
  const [integerArray, setIntegerArray] = useState([]);

  const addRandomInteger = () => {
    const randomInteger = Math.ceil(Math.random() * 10);
    const newIntegerObject = { id: Date.now(), value: randomInteger };
    setIntegerArray(prevArray => [...prevArray, newIntegerObject]);
  };

  const displayIntegerArray = () => {
    return "[" + integerArray.map(integerObject => integerObject.value).join(", ") + "]";
  };

  return (
    <div>
      <h2>Mảng số: {displayIntegerArray()}</h2>
      <button onClick={addRandomInteger}>ADD</button>
    </div>
  );
};

export default IntegerArrayAdder;
