import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import usePostApi from '../../../CustomHooks/usePostDocument';
import DateInput from '../../../Utility-Component/Form/DateInput';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import QuantityOrder from './QuantityOrder';
import { orderListState } from './View PO/Reducer/intialState';
import { addOrderReducer } from './View PO/Reducer/reducerFunction';
import Input from '../../../Utility-Component/Input';
import Radio from '../../../Utility-Component/Form/Radio';
import Spinner from '../../../Utility-Component/Spinner';

const sectionSize = ['L-W-H', 'SM-XL', 'SINGLE-INPUT']
const AddOrders = () => {
  const products = useLoaderData();
  const [addOrderState, dispatch] = useReducer(addOrderReducer, orderListState)
  //form hook for register
  const { register, handleSubmit, reset } = useForm();
  const [buyers, setbuyers] = useState();
  //target date
  const [selected, setSelected] = useState(new Date());
  //completed Date
  const [completed, setCompleted] = useState(new Date());
  const { companyData, loading } = useFetch('http://localhost:8000/companyNames');
  const [body, setBody] = useState(null);
  const { data, isLoading, isError } = usePostApi('http://localhost:8000/addOrder', body)
  const [orderListError, setOrderListError] = useState('')

  useEffect(() => {
    dispatch({ type: 'DATE', orderedDate: format(selected, 'PP'), targetDate: format(completed, 'PP') })
  }
    , [selected, completed,])

  if (loading) {
    return <Spinner/>;
  }
  const handleInputDropdown = (e) => {
    dispatch({ type: 'COMPANY_NAME', companyName: e.target.value })
    axios.post(`http://localhost:8000/companyBuyers?companyBuyers=${e.target.value}`)
      .then((responce) => {
        setbuyers(responce.data);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = () => {
    setBody(addOrderState)

    if (!data?.error) {
      const notify = () => toast('added ordered Succesfully');
      notify()
    } else {
      const notify = () => toast(data?.error)
      notify()
    }
  };

  return (
    <section>
      <section className='mx-6 '>
        <h1 className='text-2xl my-3 font-bold'>Add Your Order List</h1>
        <form
          action=''
          onSubmit={handleSubmit(onSubmit)}
          className='border shadow-sm p-6'
        >
          <div className='flex flex-wrap'>
            <div className='w-1/2 mx-4'>
              <InputDropDown
                label={'Company'}
                handleInputDropdown={handleInputDropdown}
                options={companyData}
                sectionName={'companyName'}
                placeholder={'Select your Company'}
                register={register}
                required
              />

              <InputDropDown
                label={'Buyers'}
                handleInputDropdown={(e) => { dispatch({ type: 'BUYER_NAME', buyerName: e.target.value }) }}
                options={buyers}
                sectionName={'buyerName'}
                placeholder={'Select your Buyer'}
                register={register}
                required
              />
              <InputDropDown
                label={'Product'}
                handleInputDropdown={(e) => { dispatch({ type: 'PRODUCT_NAME', productName: e.target.value }) }}
                options={products?.products}
                sectionName={'productName'}
                placeholder={'Select your Product Name'}
                register={register}
                required
              />
              <Radio
                label={'Size System'}
                array={sectionSize}
                handleRadioChange={dispatch}
                selectedValue={addOrderState.sizeSystem}
              />
              <DateInput
                label={`Ordered Date : ${selected && format(selected, 'PP')}`}
                selected={selected}
                onSelect={setSelected}

              ></DateInput>
            </div>

            <div className='my-4 w-5/12'>
              {
                addOrderState?.sizeSystem === 'L-W-H' &&
                <>
                  <Input
                    label={`Size Quantities for ${addOrderState.sizeSystem}`}
                    type='text'
                    name={'lwhQuantity'}
                    inputChange={(e) => { dispatch({ type: 'SIZE_QUANTITIES', [e.target.name]: e.target.value, name: e.target.name }) }}

                  />
                </>

              }
              {
                addOrderState?.sizeSystem === 'SINGLE-INPUT' &&
                <>
                  <Input
                    label={`Size Quantities for ${addOrderState.sizeSystem}`}
                    type='text'
                    name={'singleInput'}
                    value={addOrderState.sizeQuantities}
                    inputChange={(e) => { dispatch({ type: 'SIZE_QUANTITIES', [e.target.name]: 1, name: e.target.name }) }}
                    required
                  />
                </>

              }

              <Input
                label={'Order Number'}
                inputChange={(e) => dispatch({ type: 'ORDER_NUMBER', orderNumber: e.target.value })}
                name={'orderNumber'}
                type='text'
                required
              />
              <Input
                label={'Range'}
                inputChange={(e) => dispatch({ type: 'RANGE', range: e.target.value })}
                name={'range'}
                type='text'
                required
              />

              <QuantityOrder
                dispatch={dispatch}
                addOrderState={addOrderState}

              />
              <DateInput
                label={`Target Date : ${completed && format(completed, 'PP')}`}
                selected={completed}
                onSelect={setCompleted}
              ></DateInput>
            </div>
          </div>
          {orderListError ? orderListError : ''}
          <div className='flex text-center justify-center my-4'>
            <button type='submit' className='btn btn-primary'>Insert Order</button>
          </div>
        </form>

      </section>
    </section>
  );
};

export default AddOrders;
