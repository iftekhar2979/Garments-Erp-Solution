import React from 'react';

const Input = ({ label, name, inputChange, defaultValue, type, value,className ,placeholder}) => {
  return (
    <div>
      <label className='label '>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
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