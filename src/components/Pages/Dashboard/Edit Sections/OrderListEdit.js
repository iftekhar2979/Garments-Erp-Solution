import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import putDocument from '../../../CustomHooks/putDocument';
import useFetch from '../../../CustomHooks/useFetch';
import useProductItem from '../../../CustomHooks/useProductHook';
import Button from '../../../Utility-Component/Button';
import InputDate from '../../../Utility-Component/Form/InputDate';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import Heading from '../../../Utility-Component/Heading';
import InputForm from '../../../Utility-Component/InputForm';
import PreviousSelected from './PreviousSelected';
import patchDocuments from '../../../CustomHooks/putDocument';
import { format, parseISO } from 'date-fns';
import { useGetCompanyNamesQuery, useGetProductsQuery } from '../../../../Redux/Features/api/apiSlice';

const OrderListEdit = () => {
  const defaultData = useLoaderData();
  const [buyers, setbuyers] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  //hooks for finding data and saving Data on state
  const [companyAndProduct, setCompanyAndProduct] = useState({
    companyName: '',
    buyerName: '',
    targetDate: '',
  });
  const { data: companyData, isLoading, isError } = useGetCompanyNamesQuery(undefined,{
    refetchOnMountOrArgChange: 600,
    keepUnusedDataFor:600    
  })
  const { data: {products}=[], isLoading:productIsLoading, isError:productIsError } = useGetProductsQuery()

  const companyNames=companyData?.map(item=>item.companyName)


  const handleInputDropdown = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    axios.post(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/companyBuyers?companyBuyers=${e.target.value}`,{},{withCredentials:true})
    .then((responce) => {
      setbuyers(responce.data);
    })
    .catch((error) => console.log(error));
  }
   
  const handleBuyer = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleProduct = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (obj) => {
    let {targetDate,orderedDate}=obj
    obj.targetDate=  format(parseISO(targetDate),'PP')
    obj.orderedDate=  format(parseISO(orderedDate),'PP')
    
    const editedData = { ...companyAndProduct, ...obj };
    patchDocuments(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/orderList`,{...editedData},defaultData?._id)
  };
  return (
    <>
      <Heading heading={'Edit Your Order List'}></Heading>

      <section className='flex justify-center'>
        <div className='flex justify-center w-5/12'>
          <form
            action=''
            onSubmit={handleSubmit(onSubmit)}
            className='w-full border shadow-xl px-10 bg-gray-100'
          >
            <InputDropDown
              label={'Company'}
              handleInputDropdown={handleInputDropdown}
              options={companyNames}
              sectionName={'companyName'}
              placeholder={'Select your Company'}
              // prevSelected={defaultData?.companyName}
              className={'select select-primary'}
              register={register}
              
            />

            <InputDropDown
              label={'Buyers'}
              handleInputDropdown={handleBuyer}
              options={buyers}
              sectionName={'buyerName'}
              placeholder={'Select your Buyer'}
              className={'select select-primary'}
              // prevSelected={defaultData?.buyerName}
              register={register}
              
            />
            <InputDropDown
              label={'Product'}
              handleInputDropdown={handleProduct}
              options={products}
              sectionName={'productName'}
              placeholder={'Select your Product Name'}
              register={register}
              // prevSelected={defaultData.productName}
              className={'select select-primary'}
            
            />
            <InputForm
              label={'Order Number'}
              register={register}
              name={'orderNumber'}
              defaultValue={defaultData?.orderNumber}
            />
            <InputForm
              label={'Range'}
              register={register}
              name={'range'}
              defaultValue={defaultData?.range}
            />
            <InputDate
              register={register}
              name={'targetDate'}
              label={`Target Date : `}
            ></InputDate>
            <InputDate
              register={register}
              name={'orderedDate'}
              label={`Order Date : `}
            ></InputDate>
            <Button type={'submit'} className={'btn btn-success my-4'}>
              Submit
            </Button>
          </form>
        </div>
        <PreviousSelected data={defaultData}></PreviousSelected>
       
      </section>
    </>
  );
};

export default OrderListEdit;
