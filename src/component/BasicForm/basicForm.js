import React, { useState } from 'react';

const BasicForm = () => {
  const [counter, setCounter] = useState(16);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='box w-50 border rounded' style={{ padding: "5%" }}>
        <div><strong style={{ fontSize: `${counter}px` }}>Shiva</strong></div>
        <div className="mt-3">
          <button type="button" className="btn btn-primary btn-sm me-2" onClick={handleIncrease}>Increase size</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={handleDecrease}>Decrease size</button>
        </div>
      </div>
    </div>
  );
}

export default BasicForm;
