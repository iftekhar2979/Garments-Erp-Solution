import React from 'react';

const InputForm = ({label,register,name}) => {
    return (
        <div>
            <label className='label '>{label}</label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
             {...register(name)}
            />
          </div>
    );
};

export default InputForm;