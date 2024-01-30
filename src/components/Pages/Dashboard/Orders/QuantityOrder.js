
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

  return (
    <div>
      <div className='w-full border my-2'>
        <label className='label'>{component} </label>
        {data?.map((item, index) => {
          return (
            <div className='mb-4 flex justify-center' key={index}>
              <div>
                <label className='label'>Style-{index+1}</label>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  name='style'
                  required
                  onChange={(e) => handleChange(e, index)}
                />
                <label className='label'>Color Quantity</label>
                <input
                  type='number'
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuantityOrder;
