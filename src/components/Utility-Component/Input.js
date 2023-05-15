import React from 'react';

const Input = ({ label, name, inputChange, defaultValue, type, value }) => {
  return (
    <div>
      <label className='label '>{label}</label>
      <input
        type={type}
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'
        defaultValue={defaultValue}
        value={value}
        onChange={inputChange}
        name={name}
        required
      />
    </div>
  );
};

export default Input;