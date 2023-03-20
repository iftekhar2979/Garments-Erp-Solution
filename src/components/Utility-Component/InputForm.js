import React from 'react';

const InputForm = ({label,register,name,defaultValue}) => {
    return (
        <div>
            <label className='label '>{label}</label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              defaultValue={defaultValue}
             {...register(name)}
             required
            />
          </div>
    );
};

export default InputForm;