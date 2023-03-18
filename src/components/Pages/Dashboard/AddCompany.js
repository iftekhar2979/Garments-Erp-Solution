import React from 'react';
import { useForm } from 'react-hook-form';
import postDocuments from '../../CustomHooks/postDocuments';
import UseCollectArray from '../../CustomHooks/UseCollectArray';
import InputForm from '../../Utility-Component/InputForm';
import MoreInput from '../../Utility-Component/MoreInput';

const AddCompany = () => {
  const {
    register,
    handleSubmit,
    watch,
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
            ></InputForm>
            <InputForm
              label={'Company Location'}
              register={register}
              name={'location'}
            />
            <InputForm label={'Contact'} register={register} name={'contact'} />
          </div>

          <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            component={'Buyers'}
            setVal={setVal}
          />
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
  );
};

export default AddCompany;
