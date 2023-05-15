import React from 'react';

const MoreInput = ({
  handleAdd,
  handleChange,
  handleRemove,
  val,
  setVal,
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
          </div>
        );
      })}
    </div>
  );
};

export default MoreInput;
