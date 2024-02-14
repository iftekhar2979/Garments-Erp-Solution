import React from 'react';
<<<<<<< HEAD
import { HiOutlinePlusCircle,HiOutlineX } from "react-icons/hi";
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

const MoreInput = ({
  handleAdd,
  handleChange,
  handleRemove,
  val,
  setVal,
<<<<<<< HEAD
  placeholder,
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
<<<<<<< HEAD
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
=======
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => handleChange(e, index)}
            />
            <button
              className='btn-sm rounded-full text-center bg-gray-300'
              onClick={handleAdd}
            >
              +
            </button>
            <button
              className='btn-sm rounded-full bg-gray-300'
              onClick={() => handleRemove(index)}
            >
              x
            </button>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
          </div>
        );
      })}
    </div>
  );
};

export default MoreInput;
