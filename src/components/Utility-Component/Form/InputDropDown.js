import React from 'react';

const InputDropDown = ({register,sectionName,options,label,}) => {
    return (
        <>
         <div className='my-2'>
         <label className='label'>{label}</label>
              <select
                className='select select-primary w-full max-w-xs'
                {...register(sectionName, { required: true })}
                >
                   <option disabled selected>Pick one Company</option>
                {options?.map((option) => (
                  <option >{option}</option>
                ))}
              </select>
            </div>
        </>
    );
};

export default InputDropDown;