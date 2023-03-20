import React from 'react';

const InputDropDown = ({handleInputDropdown,sectionName,options,label,placeholder}) => {
    return (
        <>
         <div className='my-2'>
         <label className='label'>{label}</label>
              <select
                className='select select-primary w-full max-w-xs '
                name={sectionName}
                onChange={handleInputDropdown}
                required
               
                >
                     <option disabled selected>{placeholder}</option> 
                {Array.isArray(options)&& options?.map((option) => (
                  <option className='cursor-pointer'>{option}</option>
                ))}
              </select>
            </div>
        </>
    );
};

export default InputDropDown;