import axios from 'axios';
import { format } from 'date-fns';
<<<<<<< HEAD
import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
import useFetch from '../../../CustomHooks/useFetch';
import usePostApi from '../../../CustomHooks/usePostDocument';
import DateInput from '../../../Utility-Component/Form/DateInput';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
<<<<<<< HEAD
import QuantityOrder from './QuantityOrder';
import { orderListState } from './View PO/Reducer/intialState';
import { addOrderReducer } from './View PO/Reducer/reducerFunction';
import Input from '../../../Utility-Component/Input';
import Radio from '../../../Utility-Component/Form/Radio';
import Spinner from '../../../Utility-Component/Spinner';
import useDocumentTitle from '../../../CustomHooks/useDocumentTitle';
import InputCheckBox from '../../../Utility-Component/InputCheckBox';
import { useAddOrderMutation, useAddOrderQuery, useGetCompanyNamesQuery, useGetProductsQuery } from '../../../../Redux/Features/api/apiSlice'
import { useSelector } from 'react-redux';


const sectionSize = ['L-W-H', 'SM-XL', 'SINGLE-INPUT']
const AddOrders = () => {

  useDocumentTitle('DASHBOARD--ADD ORDER')
  const [addOrderState, dispatch] = useReducer(addOrderReducer, orderListState)
  //form hook for register
  const navigate = useNavigate()
  const {refetchOrder}=useSelector(state=>state.refetching)
=======
import InputForm from '../../../Utility-Component/InputForm';
import QuantityOrder from './QuantityOrder';
const AddOrders = () => {
  const products = useLoaderData();
  //form hook for register
  const [colors, setColors] = useState([]);
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  const { register, handleSubmit, reset } = useForm();
  const [buyers, setbuyers] = useState();
  //target date
  const [selected, setSelected] = useState(new Date());
<<<<<<< HEAD
  //completed Date
  const [completed, setCompleted] = useState(new Date());
  const [companyName, setCompanyName] = useState([])
  const { data: companyData, isLoading, isError } = useGetCompanyNamesQuery(undefined,{
    refetchOnMountOrArgChange: 600,
    keepUnusedDataFor:600    
  })
  const { data: products, isLoading: productIsLoading, isError: productIsError } = useGetProductsQuery(undefined,{
    refetchOnMountOrArgChange: 600,
    keepUnusedDataFor:600    
  })
  const [addOrder, { isSuccess, isError: addingOrderError, error }] = useAddOrderMutation()
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
}


  useEffect(() => {
    dispatch({ type: 'DATE', orderedDate: format(selected, 'PP'), targetDate: format(completed, 'PP') })
    if (isChecked) dispatch({ type: 'CARTOON_STICKER', payload: isChecked })
    const names = companyData?.map(item => item.companyName)
    setCompanyName(names)
  }
    , [selected, completed, companyData, isChecked])

  if (isLoading) {
    return <Spinner />;
  }

  const handleInputDropdown = (e) => {
    const val = e.target.value
    const findCompanyLocation = companyData?.find((item, index) => {
      return item?.companyName === val
    })

    const { companyName, location, shortForm } = findCompanyLocation

    dispatch({ type: 'COMPANY_NAME', payload: { companyName, location, shortForm } })

    setbuyers(findCompanyLocation.buyer)

  };

 

  const onSubmit = () => {
    console.log(addOrderState)
    addOrder(addOrderState)
    .then(res => {
      if(res.data){
        navigate('/dashboard/viewOrders')
        refetchOrder()
        const notify = () => toast.success('added ordered Succesfully');
        notify()

      }
    }).catch(error=>{
      console.log(error)
    })
   
  }

  const findingErrors = {
    companyError: addingOrderError && error.data.error.includes('companyName'),
    productError: addingOrderError && error.data.error.includes('productName'),
    tbError: addingOrderError && error.data.error.includes('tbNumber')
  }
  const { companyError, productError, tbError } = findingErrors
=======
  //quantity
  const [quantity, setQuantity] = useState();
  //total Quantity
  const [totalQty, setTotalQty] = useState(0);
  //completed Date
  const [completed, setCompleted] = useState(new Date());
  //finding the company and buyer and other's data and handle that with this state
  const [companyName, setCompanyName] = useState({
    companyName: '',
    buyerName: '',
    targetDate: '',
  });
  const { companyData, loading } = useFetch(
    'http://localhost:8000/companyNames'
  );
  const [body, setBody] = useState(null);
  const { data } = usePostApi('http://localhost:8000/addOrder', body);
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
      .catch((error) => console.log(error));
  };
  const handleBuyer = (e) => {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleProduct = (e) => {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = (e) => {
    let details = [];
    if (colors) {
      for (let i = 0; i < quantity.length; i++) {
        details = [
          ...details,
          { style: colors[i], colorQuantity: parseFloat(quantity[i]) },
        ];
      }
    }
    const order = {
      orderedDate: format(selected, 'PP'),
      targetDate: format(completed, 'PP'),
    };
    const orderDetails = { ...companyName, ...e, ...order, style: details };
    setBody(orderDetails);
    if (data) {
      console.log(data);
      const notify = () => toast('Order List Added Succesfully');
      notify();
    }
    setCompanyName({ companyName: '', buyerName: '' });
    reset();
  };
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

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
<<<<<<< HEAD
                divclass={'my-2'}
                handleInputDropdown={handleInputDropdown}
                className={`select ${companyError ? "select-error" : "select-primary"} w-full max-w-xs `}
                options={companyName}
                sectionName={'companyName'}
                placeholder={'Select your Company'}
                register={register}
                required
              />
              {companyError && <h1 className='text-sm text-red-500'>Provide Company Name Here!!!</h1>}

              <InputDropDown
                label={'Buyers'}
                divclass={'my-2'}
                handleInputDropdown={(e) => { dispatch({ type: 'BUYER_NAME', buyerName: e.target.value }) }}
=======
                handleInputDropdown={handleInputDropdown}
                options={companyData}
                sectionName={'companyName'}
                placeholder={'Select your Company'}
                register={register}
              />

              <InputDropDown
                label={'Buyers'}
                handleInputDropdown={handleBuyer}
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
                options={buyers}
                sectionName={'buyerName'}
                placeholder={'Select your Buyer'}
                register={register}
<<<<<<< HEAD
                className={'select select-primary w-full max-w-xs '}
              />
                {error?.data?.error && <h1 className='text-sm text-red-500'>{error?.data?.error}</h1>}
              <InputDropDown
                label={'Product'}
                divclass={'my-2'}
                handleInputDropdown={(e) => { dispatch({ type: 'PRODUCT_NAME', productName: e.target.value }) }}
                options={products?.products}
                sectionName={'productName'}
                placeholder={'Select your Product Name'}
                className={`select ${productError ? "select-error" : "select-primary"} w-full max-w-xs `}
                register={register}
                required
              />
              {productError && <h1 className='text-sm text-red-500'>Provide Product Name Here!!!</h1>}
              <Radio
                label={'Size System'}
                array={sectionSize}
                handleRadioChange={dispatch}
                selectedValue={addOrderState.sizeSystem}
              />
              {
                addOrderState?.sizeSystem === 'SM-XL' &&
                <InputCheckBox label={"Cartoon Sticker"} InputcheckboxChange={handleCheckbox} isChecked={isChecked} />

              }
=======
              />
              <InputDropDown
                label={'Product'}
                handleInputDropdown={handleProduct}
                options={products?.products}
                sectionName={'productName'}
                placeholder={'Select your Product Name'}
                register={register}
              />

>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              <DateInput
                label={`Ordered Date : ${selected && format(selected, 'PP')}`}
                selected={selected}
                onSelect={setSelected}
<<<<<<< HEAD

=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              ></DateInput>
            </div>

            <div className='my-4 w-5/12'>
<<<<<<< HEAD
              {
                addOrderState?.sizeSystem === 'L-W-H' &&
                <>
                  <Input
                    label={`Size Quantities for ${addOrderState.sizeSystem}`}
                    type='text'
                    name={'lwhQuantity'}
                    value={1}
                    inputChange={(e) => { dispatch({ type: 'SIZE_QUANTITIES', [e.target.name]: 1, name: e.target.name }) }}
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

                    value={1}
                    inputChange={(e) => { dispatch({ type: 'SIZE_QUANTITIES', [e.target.name]: 1, name: e.target.name }) }}

                  />
                </>
              }
              <Input
                label={'Order Number'}
                className={`input input-bordered w-full max-w-xs`}
                placeholder={'Order Number'}
                inputChange={(e) => dispatch({ type: 'ORDER_NUMBER', orderNumber: e.target.value })}
                name={'orderNumber'}
                type='text'
                required
              />
              <Input
                label={'Season'}
                className={`input input-bordered w-full max-w-xs`}
                placeholder={'Season'}
                inputChange={(e) => dispatch({ type: 'Season', season: e.target.value })}
                name={'season'}
                type='text'
                
              />
              
                  <Input
                label={'TB'}
                className={`input input-bordered ${tbError ? "input-error" : "input-primary"} w-full max-w-xs`}
                placeholder={'TB Number'}
                inputChange={(e) => dispatch({ type: 'TB_NUMBER', tbNumber: e.target.value })}
                name={'tbNumber'}
                type='text'
                required
              />
              {tbError && <h1 className='text-sm text-red-500'>You Have Already Added The TB to Another Company!!!</h1>}
              <Input
                label={'Range'}
                className={`input input-bordered w-full max-w-xs`}
                placeholder={'Range'}
                inputChange={(e) => dispatch({ type: 'RANGE', range: e.target.value })}
                name={'range'}
                type='text'
                required
              />

              <QuantityOrder
                dispatch={dispatch}
                addOrderState={addOrderState}

              />
=======
              <InputForm
                label={'Order Number'}
                register={register}
                name={'orderNumber'}
                type='text'
              />
              <InputForm
                label={'Range'}
                register={register}
                name={'range'}
                type='text'
              />

              <QuantityOrder
                quantity={quantity}
                setQuantity={setQuantity}
                setTotalQty={setTotalQty}
                setColors={setColors}
              />

>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              <DateInput
                label={`Target Date : ${completed && format(completed, 'PP')}`}
                selected={completed}
                onSelect={setCompleted}
              ></DateInput>
            </div>
          </div>

<<<<<<< HEAD
          {addingOrderError && <h1 className='text-xl text-center text-red-500'>'Something Validation Error in Server Please Check Again!!!</h1>}
          <div className='flex text-center justify-center my-4'>
            <button type='submit' className='btn btn-primary'>Insert Order</button>
=======
          <div className='flex text-center justify-center my-4'>
            <button className='btn btn-primary'>Insert </button>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddOrders;
