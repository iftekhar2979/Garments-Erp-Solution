import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetch from '../../../CustomHooks/useFetch';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import Radio from '../../../Utility-Component/Form/Radio';
import InputForm from '../../../Utility-Component/InputForm';
const AddOrders = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [buyers, setbuyers] = useState();
  const [selectedValue, setSelectedValue] = useState('');
  const [companyName, setCompanyName] = useState({
    companyName: '',
    buyerName: '',
    status:''
  });
  const [isLoading, setisLoading] = useState(false);
  const { companyData, loading, error, setcompanyData } = useFetch(
    'http://localhost:8000/companyNames'
  );

  if (loading) {
    return <h1 className='text-4xl'>Loading....</h1>;
  }

  const handleInputDropdown = (e) => {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    axios
      .post(`http://localhost:8000/companyBuyers?companyName=${e.target.value}`)
      .then((responce) => {
        setbuyers(responce.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setisLoading(false));
  };
  const handleBuyer = (e) => {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  

  function handleRadioChange(e) {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const onSubmit = (e) => {
    console.log(companyName);
  };
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
          <div className='grid grid-cols-3 gap-2 '>
            <div>
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
            </div>
            <div className='my-2'>
              <InputForm
                label={'P.O Number'}
                register={register}
                name={'poNumber'}
              />
              <InputForm
                label={'Quantity'}
                register={register}
                name={'quantity'}
              />
            </div>
            <div className='my-4 border'>
              <Radio label={`Order Status`} handleRadioChange={handleRadioChange} selectedValue={companyName?.status} />
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
