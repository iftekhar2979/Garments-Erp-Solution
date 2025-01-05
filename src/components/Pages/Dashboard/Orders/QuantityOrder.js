<<<<<<< HEAD

import React, { useEffect, useState } from 'react';
const QuantityOrder = ({component,dispatch}) => {
  const [data,setData]=useState([{style:"",colorQuantity:""}])
   
  const handleClick=()=>{
      setData([...data,{style:"",colorQuantity:""}])
    }
  const handleChange=(e,i)=>{
      const {name,value}=e.target
      const onchangeVal = [...data]
      onchangeVal[i][name]=value
      dispatch({type:'QUANTITY_ORDER_STYLE',payload:onchangeVal})
      setData(onchangeVal)
}
  const handleDelete=(i)=>{
      const deleteVal = [...data]
      deleteVal.splice(i,1)
      dispatch({type:'QUANTITY_ORDER_DELETE',payload:deleteVal})
      setData(deleteVal)
}
=======
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
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

  return (
    <div>
      <div className='w-full border my-2'>
        <label className='label'>{component} </label>
<<<<<<< HEAD
        {data?.map((item, index) => {
=======

        {val?.map((item, index) => {
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
          return (
            <div className='mb-4 flex justify-center' key={index}>
              <div>
                <label className='label'>Style-{index+1}</label>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  name='style'
<<<<<<< HEAD
                  required
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
                  onChange={(e) => handleChange(e, index)}
                />
                <label className='label'>Color Quantity</label>
                <input
                  type='number'
<<<<<<< HEAD
                  onWheel={e => e.target.blur()}
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  name='colorQuantity'
                  required
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <a
                className='btn-sm rounded cursor-copy mr-2 text-xl text-center bg-green-300'
                onClick={handleClick}
              >
                +
              </a>
              <a
                className='btn-sm rounded cursor-pointer text-xl bg-red-500'
                onClick={() => handleDelete(index)}
              >
                x
              </a>
=======
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
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuantityOrder;
