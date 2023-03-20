import React from 'react';

function Radio({label,handleRadioChange,selectedValue}) {
 

  return (
    <div className=' border'>
        <div className='ml-4'>
        <label htmlFor="" className='text-xl font-bold'>{label}</label>
        <div className='flex flex-col form-control'>
      <label className='text-xl'>
        <input className={`radio ${selectedValue && "radio-primary"}`} type="radio" name="status" value="Pending"  checked={selectedValue === "Pending"} onChange={handleRadioChange} />
        <span className='pl-4'>Pending</span> 
      </label>
      <label className='text-xl'>
        <input className={`radio ${selectedValue && "radio-primary"}`} type="radio" name="status" value="Completed" checked={selectedValue === "Completed"} onChange={handleRadioChange} />
        <span className='pl-4'>Completed</span>
      </label>
      <label className='text-xl'>
        <input className={`radio ${selectedValue && "radio-primary"}`} type="radio" name="status" value="Canceled" checked={selectedValue === "Canceled"} onChange={handleRadioChange} />
        <span className='pl-4'>Canceled</span>
      </label>
      <label className='text-xl'>
        <input className={`radio ${selectedValue && "radio-primary"}`} type="radio" name="status" value="Ordered" checked={selectedValue === "Ordered"} onChange={handleRadioChange} />
        <span className='pl-4'>Ordered</span>
      </label>
      </div>
      <p>You selected: {selectedValue}</p>
      </div>
    </div>
  );
}
export default Radio