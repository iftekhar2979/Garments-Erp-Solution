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
<<<<<<< HEAD
import patchDocuments from '../../../CustomHooks/putDocument';
import { format, parseISO } from 'date-fns';
import { useGetCompanyNamesQuery, useGetProductsQuery } from '../../../../Redux/Features/api/apiSlice';

=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
<<<<<<< HEAD
  const { data: companyData, isLoading, isError } = useGetCompanyNamesQuery(undefined,{
    refetchOnMountOrArgChange: 600,
    keepUnusedDataFor:600    
  })
  const { data: {products}=[], isLoading:productIsLoading, isError:productIsError } = useGetProductsQuery()

  const companyNames=companyData?.map(item=>item.companyName)
=======
  const { companyData, loading, error, setcompanyData } = useFetch(
    'http://localhost:8000/companyNames'
  );
  //custom hook for load products from server
  const { product } = useProductItem();
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900


  const handleInputDropdown = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
<<<<<<< HEAD

    axios.post(`${process.env.REACT_APP_DEVELOPMENT_URL}/companyBuyers?companyBuyers=${e.target.value}`,{},{withCredentials:true})
    .then((responce) => {
      setbuyers(responce.data);
    })
    .catch((error) => console.log(error));
  }
   
=======
    axios
      .post(`http://localhost:8000/companyBuyers?companyName=${e.target.value}`)
      .then((responce) => {
        setbuyers(responce.data);
      })
      .catch((error) => console.log(error));
  };
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  const handleBuyer = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
<<<<<<< HEAD
=======
    // console.log(companyName)
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  };

  const handleProduct = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
<<<<<<< HEAD

  const onSubmit = (obj) => {
    let {targetDate,orderedDate}=obj
    obj.targetDate=  format(parseISO(targetDate),'PP')
    obj.orderedDate=  format(parseISO(orderedDate),'PP')
    
    const editedData = { ...companyAndProduct, ...obj };
    patchDocuments(`${process.env.REACT_APP_DEVELOPMENT_URL}/orderList`,{...editedData},defaultData?._id)
=======
  const onSubmit = (obj) => {
    console.log(obj);
    const editedData = { ...companyAndProduct, ...obj };
    putDocument('http://localhost:8000/orderList',{...editedData},defaultData?._id)
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
<<<<<<< HEAD
              options={companyNames}
              sectionName={'companyName'}
              placeholder={'Select your Company'}
              // prevSelected={defaultData?.companyName}
              className={'select select-primary'}
=======
              options={companyData}
              sectionName={'companyName'}
              placeholder={'Select your Company'}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              register={register}
              
            />

            <InputDropDown
              label={'Buyers'}
              handleInputDropdown={handleBuyer}
              options={buyers}
              sectionName={'buyerName'}
              placeholder={'Select your Buyer'}
<<<<<<< HEAD
              className={'select select-primary'}
              // prevSelected={defaultData?.buyerName}
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              register={register}
              
            />
            <InputDropDown
              label={'Product'}
              handleInputDropdown={handleProduct}
<<<<<<< HEAD
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
=======
              options={product?.products}
              sectionName={'productName'}
              placeholder={'Select your Product Name'}
              register={register}
            
            />
            <InputForm
              label={'P.O Number'}
              register={register}
              name={'poNumber'}
              defaultValue={defaultData?.poNumber}
            />
            <InputForm
              label={'Quantity'}
              register={register}
              name={'quantity'}
              defaultValue={defaultData?.quantity}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
