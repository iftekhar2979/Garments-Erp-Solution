import React from 'react';
import { HiOutlinePlusCircle,HiOutlineX } from "react-icons/hi";

const MoreInput = ({
  handleAdd,
  handleChange,
  handleRemove,
  val,
  setVal,
  placeholder,
  component,
}) => {
  return (
    <div className='inline'>
      <label className='label'>{component} </label>

      {val?.map((item, index) => {
        return (
          <div className='mb-4 flex justify-center' key={index}>
            <input
              type='text'
              placeholder={placeholder}
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => handleChange(e, index)}
            />
            <div className='flex items-center'>
            <button
              className='btn-sm  hover:bg-green-500 rounded-full'
              onClick={handleAdd}
            >
              <HiOutlinePlusCircle size={26}/>
            </button>
            <button
              className='btn-sm hover:bg-red-600 rounded-full'
              onClick={() => handleRemove(index)}
            >
              <HiOutlineX size={26}/>
            </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoreInput;
