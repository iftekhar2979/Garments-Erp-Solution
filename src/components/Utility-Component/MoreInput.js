import React from 'react';

const MoreInput = ({handleAdd,handleChange,handleRemove,val,setVal}) => {


  return (
    <div>
     
      <label className='label'>Buyer's </label>
    
    
            {val?.map((item, index) => {
        return (
          <div className='mb-4 block' key={index}>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => handleChange(e, index)}
            />
            
            <button
              className='btn-sm rounded-full bg-gray-300'
              onClick={() => handleRemove(index)}
            >
              x
            </button>
           
           
          </div>
        );
      })}
       <button
        className='btn-sm rounded-full text-center bg-gray-300'
        onClick={handleAdd}
      >
        +
      </button>
   
   
      
    </div>
  );
};

export default MoreInput;
