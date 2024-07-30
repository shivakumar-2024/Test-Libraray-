import React, { useState } from 'react';

const MobileRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    data: {
      year: '',
      price: '',
      CPUmodel: '',
      hardDiskSize: ''
    }
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.data) {
      setFormData({
        ...formData,
        data: {
          ...formData.data,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.data.year.trim()) errors.year = 'Year is required.';
    if (!formData.data.price.trim()) errors.price = 'Price is required.';
    if (!formData.data.CPUmodel.trim()) errors.CPUmodel = 'CPU model is required.';
    if (!formData.data.hardDiskSize.trim()) errors.hardDiskSize = 'Hard disk size is required.';
    
    // Optionally, you can add more complex validation here
    if (isNaN(formData.data.year)) errors.year = 'Year must be a number.';
    if (isNaN(formData.data.price)) errors.price = 'Price must be a number.';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Handle successful form submission here
      alert('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  const inputStyle = {
    textAlign: 'center'
  };

  return (
    <div className='container'>
      <div className='card mx-auto mt-5' style={{ maxWidth: '600px' }}>
        <div className='card-header text-center'>
          <h3>Mobile Register</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='card-body'>
            <div className='form-group mb-3 mx-auto w-50'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='form-control'
                placeholder='Enter the name'
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.name && <small className='text-danger'>{errors.name}</small>}
            </div>
            <div className='form-group mb-3 mx-auto w-50'>
              <label htmlFor='year'>Year</label>
              <input
                type='text'
                id='year'
                name='year'
                className='form-control'
                placeholder='Enter the year'
                value={formData.data.year}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.year && <small className='text-danger'>{errors.year}</small>}
            </div>
            <div className='form-group mb-3 mx-auto w-50'>
              <label htmlFor='price'>Price</label>
              <input
                type='text'
                id='price'
                name='price'
                className='form-control'
                placeholder='Enter the price'
                value={formData.data.price}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.price && <small className='text-danger'>{errors.price}</small>}
            </div>
            <div className='form-group mb-3 mx-auto w-50'>
              <label htmlFor='CPUmodel'>CPU Model</label>
              <input
                type='text'
                id='CPUmodel'
                name='CPUmodel'
                className='form-control'
                placeholder='Enter the CPU model'
                value={formData.data.CPUmodel}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.CPUmodel && <small className='text-danger'>{errors.CPUmodel}</small>}
            </div>
            <div className='form-group mb-3 mx-auto w-50'>
              <label htmlFor='hardDiskSize'>Hard Disk Size</label>
              <input
                type='text'
                id='hardDiskSize'
                name='hardDiskSize'
                className='form-control'
                placeholder='Enter the hard disk size'
                value={formData.data.hardDiskSize}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors.hardDiskSize && <small className='text-danger'>{errors.hardDiskSize}</small>}
            </div>
            <div className='form-group text-center'>
              <button type='submit' className='btn btn-primary'>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileRegister;
