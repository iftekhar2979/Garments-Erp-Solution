import React from 'react';

const InputDate = ({name,label,register,defaultValue}) => {
    return (
        <>
        <div className=''>
            <label className='label'>{label}</label>
            <input type="date" name={name} {...register(name)} defaultValue={defaultValue}/>
        </div>
        </>
    );
};

export default InputDate;