import React from 'react';

function Radio({ label, handleRadioChange, selectedValue, array }) {


  return (
    <div className='w-1/2 border'>
      <div className='ml-4'>
        <label htmlFor="" className='text-xl font-bold'>{label}</label>
        <div className='flex flex-col form-control'>


          {array?.map((item,i) => {
            return (
              <label key={i} className='text-xl hover:bg-gray-200'>
                <input className={`radio  ${selectedValue && "radio-primary"}`} type="radio" name="sizeSystem" required value={item} checked={selectedValue===item} onChange={()=>handleRadioChange({type:'SIZE_SYSTEM',item:item})} />
                <span className='pl-4 '>{item}</span>
              </label>
            )
          })}
        </div>
      
      </div>
    </div>
  );
}
export default Radio