import React, { memo, useContext, useEffect, useState } from 'react';
import Heading from '../../../../Utility-Component/Heading';
import DateInput from '../../../../Utility-Component/Form/DateInput';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import InputDropDown from '../../../../../components/Utility-Component/Form/InputDropDown'
import axios from 'axios';
import { format } from 'date-fns';

const DetailPOProduct = ({ properties, orderNumberDispatch }) => {
  const [completed, setCompleted] = useState()
  const { status } = useContext(ViewContextProvider)
  const { companyName, buyerName, productName, orderNumber, completeDate, range, tbNumber } = properties
  const [compDate, setCompDate] = useState(new Date(completeDate))


  useEffect(() => {
    axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/editDate/${properties?._id}`, { completeDate: completed },{withCredentials:true})
      .then(res => {
        return res.data
      })

  }, [completed, properties?._id])
  const handleStatus = (e) => {
    axios.patch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/editStatus/${properties?._id}`, { status: e.target.value },{withCredentials:true})
      .then(res => res.data)
  }
  return (
    <div className='flex justify-center  p-4'>
      <div className='border bg-green-300 shadow-xl p-6 '>
        <Heading heading={'Selected Order Details'}></Heading>
        <h1 className=''>
          <span className='text-2xl font-semibold'>COMPANY</span> 
          <span className='text-2xl ml-[98px]'> : {companyName}</span>
        </h1>
        <h1 className=''>
          <span className='text-2xl font-semibold'>BUYER</span>
          <span className='text-2xl ml-[138px] '> : {buyerName}</span>
        </h1>
        <h1 className=' '>
          <span className='text-2xl font-semibold'>PRODUCT</span>
          <span className='text-2xl ml-[101px]'> : {productName}</span>
        </h1>
        <h1 className=''>
          <span className='text-2xl font-semibold'>ORDER NUMBER</span>
          <span className='text-2xl ml-[28px]'> : {orderNumber}</span>
        </h1>
        <h1 className=''>
          <span className='text-2xl font-semibold'>RANGE</span> 
          <span className='text-2xl ml-[135px]'> : {range}</span>
        </h1>
        <h1 className=''>
          <span className='text-2xl font-semibold'>TB NUMBER</span>
          <span className='text-2xl ml-[78px]'> : {tbNumber}</span>
        </h1>
      </div>
      <div className='border bg-yellow-300 shadow-xl ml-2 '>
        {completeDate ? <DateInput defaultMonth={new Date(compDate)} selected={compDate} /> :
          <DateInput lable={'select completed Date'} selected={completed} onSelect={setCompleted} />}
      </div>
      <div className='border bg-blue-400 shadow-xl ml-2 p-4'>
        <InputDropDown
          sectionName={'status'}
          className='w-full'
          options={status}
          placeholder={'Status'}
          defaultValue={properties?.status}
          handleInputDropdown={handleStatus}
        />
        <textarea
          className='textarea textarea-bordered w-full'
          placeholder='admin Note'
          name='adminNote'
          onChange={(e) => orderNumberDispatch({ type: 'ADMIN_NOTE', [e.target.name]: e.target.value, property: e.target.name })}
        ></textarea>
      </div>
    </div>
  );
};

export default memo(DetailPOProduct);