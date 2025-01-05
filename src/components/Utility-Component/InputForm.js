import React from 'react';

<<<<<<< HEAD
const InputForm = ({label,register,name,defaultValue,type,placeholder}) => {
=======
const InputForm = ({label,register,name,defaultValue,type}) => {
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    return (
        <div>
            <label className='label '>{label}</label>
            <input
              type={type}
<<<<<<< HEAD
              placeholder={placeholder}
=======
              placeholder='Type here'
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              className='input input-bordered w-full max-w-xs'
              defaultValue={defaultValue}
             {...register(name,{ required: true})}
             required
            />
          </div>
    );
};

export default InputForm;