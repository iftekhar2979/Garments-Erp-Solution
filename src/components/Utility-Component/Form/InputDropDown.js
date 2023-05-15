import React from 'react';

const InputDropDown = ({handleInputDropdown,sectionName,options,label,placeholder,defaultValue}) => {
 
  return (
        <>
         <div className='my-2'>
         <label className='label'>{label}</label>
              <select
                className='select select-primary w-full max-w-xs '
                name={sectionName}
                onChange={handleInputDropdown}
                defaultValue={defaultValue}
                required
               
                >
                     <option disabled selected>{placeholder}</option> 
                {Array.isArray(options)&& options?.map((option,index) => (
                  <option className='cursor-pointer' key={index}  >{option}</option>
                ))}
              </select>
            </div>
        </>
    );
};

export default InputDropDown;