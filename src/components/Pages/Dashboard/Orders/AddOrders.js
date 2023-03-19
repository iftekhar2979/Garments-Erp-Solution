import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetch from '../../../CustomHooks/useFetch';
import useQueryFetch from '../../../CustomHooks/useQueryFetch';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import InputForm from '../../../Utility-Component/InputForm';
const AddOrders = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const {companyData,loading,error,setcompanyData}=useFetch('http://localhost:8000/companyNames')
    const [companyBuyers,setCompanyBuyer]=useState('')
    const {buyers,setbuyers,isLoading}=useQueryFetch('http://localhost:8000/companyBuyers?companyName',companyBuyers )
    if(loading || isLoading){
        return <h1 className='text-4xl'>Loading....</h1>
    }
    
    
    const onSubmit=(object)=>{
console.log(object)
setCompanyBuyer(object.companyName)
console.log(companyBuyers,buyers)
    }
    return (
        <section>
             <section className='mx-6'>
      <h1 className='text-2xl my-3 font-bold'>
        Add Your Company and Buyer Details
      </h1>
      <form
        action=''
        onSubmit={handleSubmit(onSubmit)}
        className='border shadow-sm p-6'
      >
        <div className='grid grid-cols-2 gap-2 '>
          <div>
            <InputDropDown
            label={'Company'}
            register={register}
            options={companyData}
            sectionName={'companyName'}
            placeholder={'Select your Company'}
            />


            <InputForm
              label={'Company Location'}
              register={register}
              name={'location'}
            />
            <InputForm label={'Contact'} register={register} name={'contact'} />
          </div>

        
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <InputForm
              label={'Company Email'}
              register={register}
              name={'email'}
            />
        </div>
        <div className='flex text-center justify-center my-4'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    </section>
        </section>
        
    );
};

export default AddOrders;