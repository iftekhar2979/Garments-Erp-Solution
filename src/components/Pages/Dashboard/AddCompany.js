<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
import { useForm } from 'react-hook-form';
import postDocuments from '../../CustomHooks/postDocuments';
import UseCollectArray from '../../CustomHooks/UseCollectArray';
import InputForm from '../../Utility-Component/InputForm';
import MoreInput from '../../Utility-Component/MoreInput';
<<<<<<< HEAD
import { toast } from 'react-hot-toast';
import { useAddCompanyMutation } from '../../../Redux/Features/api/apiSlice';
import { Navigate, useNavigate } from 'react-router-dom';
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

const AddCompany = () => {
  const {
    register,
    handleSubmit,
    watch,
<<<<<<< HEAD
    reset,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate()
  const { handleAdd, handleChange, handleRemove, val, setVal } =
    UseCollectArray();
  const [addCompany, { isSuccess, isError ,error}] = useAddCompanyMutation()

  const onSubmit = (object) => {
    const companyInfo = { ...object, buyers: val }
    addCompany(companyInfo)
  };
  useEffect(() => {
    if (isSuccess) {
      const notify = () => toast.success('Added ordered Succesfully');
      notify()
      navigate('/dashboard/companies')
    }
  }, [isSuccess])
  return (
    <section className='mx-6 bg-wholebg'>
=======
    formState: { errors },
  } = useForm();
  const { handleAdd, handleChange, handleRemove, val, setVal } =
    UseCollectArray();

  const onSubmit = (object) => {

    const companyInfo={...object,buyers:val}
    postDocuments('http://localhost:8000/addCompany',companyInfo)
  };
  return (
    <section className='mx-6'>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
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
            <InputForm
              label={'Company Name'}
              register={register}
              name={'companyName'}
<<<<<<< HEAD
              placeholder={'Company Name'}
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
            ></InputForm>
            <InputForm
              label={'Company Location'}
              register={register}
              name={'location'}
<<<<<<< HEAD
              placeholder={'Location'}
            />
               <InputForm
              label={'Short Form'}
              register={register}
              name={'shortForm'}
              placeholder={'Company Short Form'}
            />
            <InputForm label={'Contact'} placeholder={'Contact Number'} register={register} name={'contact'} />
            <InputForm
            label={'Company Email'}
            register={register}
            name={'email'}
            placeholder={'Email'}
            
          />
=======
            />
            <InputForm label={'Contact'} register={register} name={'contact'} />
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
          </div>

          <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            component={'Buyers'}
            setVal={setVal}
<<<<<<< HEAD
            placeholder={'Buyer'}
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
         
=======
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <InputForm
              label={'Company Email'}
              register={register}
              name={'email'}
            />
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        </div>
        <div className='flex text-center justify-center my-4'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    </section>
  );
};

export default AddCompany;
