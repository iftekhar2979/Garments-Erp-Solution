// import { set } from 'date-fns';
import React, { useEffect } from 'react';
import useTowMOre from '../../../CustomHooks/useTwoMore';

const QuantityOrder = ({
  component,
  quantity,
  setQuantity,
  setColors,
  setTotalQty,
}) => {
  const {
    handleAdd,
    handleChange,
    quant,
    handleRemove,
    handleChangeOther,
    totalQuanity,
    val,
  } = useTowMOre();

  useEffect(() => {
    const colors = [...val];
    const quantantites = [...quant];
    setTotalQty(totalQuanity);
    setColors(colors);
    setQuantity(quantantites);
  }, [setQuantity, quant, val, setColors, totalQuanity, setTotalQty]);

  return (
    <div>
      <div className='w-full border my-2'>
        <label className='label'>{component} </label>

        {val?.map((item, index) => {
          return (
            <div className='mb-4 flex justify-center' key={index}>
              <div>
                <label className='label'>Style-{index+1}</label>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  name='style'
                  onChange={(e) => handleChange(e, index)}
                />
                <label className='label'>Color Quantity</label>
                <input
                  type='number'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  name='colorQuantity'
                  onChange={(e) => handleChangeOther(e, index)}
                />
              </div>

              <button
                className='btn-sm rounded-full  text-center bg-gray-300'
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
    </div>
  );
};

export default QuantityOrder;
