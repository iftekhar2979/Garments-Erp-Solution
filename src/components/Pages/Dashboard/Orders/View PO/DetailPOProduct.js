import React, { useContext, useEffect, useState } from 'react';
import Heading from '../../../../Utility-Component/Heading';
import DateInput from '../../../../Utility-Component/Form/DateInput';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import InputDropDown from '../../../../../components/Utility-Component/Form/InputDropDown'
import axios from 'axios';
import { format } from 'date-fns';

const DetailPOProduct = ({properties,orderNumberDispatch}) => {
  const [completed, setCompleted] = useState()
  const {status}=useContext(ViewContextProvider)
  const {companyName,buyerName,productName,orderNumber,completeDate,range}=properties
  const [compDate,setCompDate]=useState(new Date(completeDate))

useEffect(()=>{

  axios.put(`http://localhost:8000/editDate/${properties?._id}`,{completeDate:completed})
  .then(res=>{
    // // console.log(res.data)
    return res.data
  })

  // console.log(compDate)
},[completed,properties?._id])
  const handleStatus=(e)=>{
    axios.patch(`http://localhost:8000/editStatus/${properties?._id}`,{status:e.target.value})
    .then(res=>res.data)
  }
    return (
        <div className='flex justify-center  p-4'>
        <div className='border bg-green-300 shadow-xl p-6 '>
          <Heading heading={'Selected Order Details'}></Heading>

          <h1 className='text-2xl'>
            COMPANY NAME : <span className='text-xl'>{companyName}</span>
          </h1>
          <h1 className='text-2xl'>
            Buyer NAME : <span className='text-xl'>{buyerName}</span>
          </h1>
          <h1 className='text-2xl'>
            PRODUCT NAME : <span className='text-xl'>{productName}</span>
          </h1>
          <h1 className='text-2xl'>
            Order Number : <span className='text-xl'>{orderNumber}</span>
          </h1>
          <h1 className='text-2xl'>
            Range : <span className='text-xl'>{range}</span>
          </h1>
        </div>
        <div className='border bg-yellow-300 shadow-xl ml-2 '>
          {completeDate ? <DateInput defaultMonth ={new Date(compDate)} selected={compDate}/>:
          <DateInput lable={'select completed Date'} selected={completed} onSelect={setCompleted}/>}
          </div>
          <div className='border bg-blue-400 shadow-xl ml-2 p-4'>
          <InputDropDown
            sectionName={'status'}
            className='w-full'
            options={status}
            placeholder={'Status'}
            defaultValue={properties?.status}
            // handleInputDropdown={(e)=>orderNumberDispatch({type:'STATUS',[e.target.name]:e.target.value,property:e.target.name})} 
            handleInputDropdown={handleStatus}
          />    
          <textarea
            className='textarea textarea-bordered w-full'
            placeholder='admin Note'
            name='adminNote'
            onChange={(e)=>orderNumberDispatch({type:'ADMIN_NOTE',[e.target.name]:e.target.value,property:e.target.name})}
          ></textarea>
          </div>
      </div>
    );
};

export default DetailPOProduct;