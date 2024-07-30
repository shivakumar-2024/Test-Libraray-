import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className='card card d-flex justify-content-center align-items-center' style={{ width: '300px', height: '300px', border: '2px solid black' }}>
        <div className='card d-flex justify-content-center align-items-center' style={{ width: '75%', height: '75%', border: '2px solid black' }}>
          <div className='card d-flex justify-content-center align-items-center' style={{ width: '50%', height: '50%', border: '2px solid black' }}>
            {/* Content of the innermost box */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
