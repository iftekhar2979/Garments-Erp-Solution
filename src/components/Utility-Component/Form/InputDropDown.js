import React from 'react';

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
                ))}
              </select>
            </div>
        </>
    );
};

export default InputDropDown;