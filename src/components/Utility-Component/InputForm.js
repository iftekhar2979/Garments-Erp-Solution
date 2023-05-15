import React from 'react';

const InputForm = ({label,register,name,defaultValue,type}) => {
    return (
        <div>
            <label className='label '>{label}</label>
            <input
              type={type}
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              defaultValue={defaultValue}
             {...register(name,{ required: true})}
             required
            />
          </div>
    );
};

export default InputForm;