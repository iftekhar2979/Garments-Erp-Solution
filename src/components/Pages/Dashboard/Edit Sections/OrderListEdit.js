import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import useProductItem from '../../../CustomHooks/useProductHook';
import Button from '../../../Utility-Component/Button';
import InputDate from '../../../Utility-Component/Form/InputDate';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import Heading from '../../../Utility-Component/Heading';
import InputForm from '../../../Utility-Component/InputForm';
import PreviousSelected from './PreviousSelected';
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
  const { companyData, loading, error, setcompanyData } = useFetch(
    'http://localhost:8000/companyNames'
  );
  //custom hook for load products from server
  const { product } = useProductItem();


  const handleInputDropdown = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    axios
      .post(`http://localhost:8000/companyBuyers?companyName=${e.target.value}`)
      .then((responce) => {
        setbuyers(responce.data);
      })
      .catch((error) => console.log(error));
  };
  const handleBuyer = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    // console.log(companyName)
  };

  const handleProduct = (e) => {
    setCompanyAndProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = (obj) => {
    console.log(obj);
    const editedData = { ...companyAndProduct, ...obj };
    console.log(editedData);
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
              options={companyData}
              sectionName={'companyName'}
              placeholder={'Select your Company'}
              register={register}
              
            />

            <InputDropDown
              label={'Buyers'}
              handleInputDropdown={handleBuyer}
              options={buyers}
              sectionName={'buyerName'}
              placeholder={'Select your Buyer'}
              register={register}
              
            />
            <InputDropDown
              label={'Product'}
              handleInputDropdown={handleProduct}
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
