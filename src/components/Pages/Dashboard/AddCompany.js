import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import postDocuments from '../../CustomHooks/postDocuments';
import UseCollectArray from '../../CustomHooks/UseCollectArray';
import InputForm from '../../Utility-Component/InputForm';
import MoreInput from '../../Utility-Component/MoreInput';
import { toast } from 'react-hot-toast';
import { useAddCompanyMutation } from '../../../Redux/Features/api/apiSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const AddCompany = () => {
  const {
    register,
    handleSubmit,
    watch,
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
              placeholder={'Company Name'}
            ></InputForm>
            <InputForm
              label={'Company Location'}
              register={register}
              name={'location'}
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
          </div>

          <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            component={'Buyers'}
            setVal={setVal}
            placeholder={'Buyer'}
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
         
        </div>
        <div className='flex text-center justify-center my-4'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    </section>
  );
};

export default AddCompany;
