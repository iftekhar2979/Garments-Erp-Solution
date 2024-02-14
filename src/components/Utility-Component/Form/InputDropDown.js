import React from 'react';

<<<<<<< HEAD
const InputDropDown = ({handleInputDropdown,sectionName,options,label,placeholder,divclass,defaultValue,className,labelblock,prevSelected}) => {

  return (
        <>
         <div className={divclass}>
        {!labelblock && <label className='label'>{label}</label>}
              <select
                className={className}
                name={sectionName}
                onChange={handleInputDropdown}
                defaultValue={defaultValue}
                required
               
                >
                     <option disabled selected>{prevSelected?prevSelected:placeholder}</option> 
                {Array.isArray(options)&& options?.map((option,index) => (
                  <option className='cursor-pointer' key={index}  >{option}</option>
=======
const InputDropDown = ({handleInputDropdown,sectionName,options,label,placeholder,defaultValue,selected}) => {
    return (
        <>
         <div className='my-2'>
         <label className='label'>{label}</label>
              <select
                className='select select-primary w-full max-w-xs '
                name={sectionName}
                onChange={handleInputDropdown}
                selected={defaultValue}
                required
               
                >
                     <option disabled selected>{placeholder}</option> 
                {Array.isArray(options)&& options?.map((option,index) => (
                  <option className='cursor-pointer' key={index} >{option}</option>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
                ))}
              </select>
            </div>
        </>
    );
};

export default InputDropDown;