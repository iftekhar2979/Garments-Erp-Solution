import axios from 'axios';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useFetch from '../../../CustomHooks/useFetch';
import usePostApi from '../../../CustomHooks/usePostDocument';
import DateInput from '../../../Utility-Component/Form/DateInput';
import InputDropDown from '../../../Utility-Component/Form/InputDropDown';
import InputForm from '../../../Utility-Component/InputForm';
import QuantityOrder from './QuantityOrder';
const AddOrders = () => {
  const products = useLoaderData();
  //form hook for register
  const [colors,setColors]=useState([])
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const [buyers, setbuyers] = useState();
  //target date
  const [selected, setSelected] = useState(new Date());
  //quantity
  const [quantity,setQuantity]=useState()
  //total Quantity
const [totalQty,setTotalQty]=useState(0)
  //completed Date
  const [completed, setCompleted] = useState(new Date());
  //finding the company and buyer and other's data and handle that with this state
  const [companyName, setCompanyName] = useState({
    companyName: '',
    buyerName: '',
    targetDate: '',
  });
  const { companyData, loading, } = useFetch(
    'http://localhost:8000/companyNames'
  );
  const [body,setBody]=useState(null)
const { data }=usePostApi('http://localhost:8000/addOrder',body)
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
    // console.log(companyName)
  };
// console.log('value',val)
  const handleProduct = (e) => {
    setCompanyName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    let details=[]
    if(colors){
      for(let i=0;i<quantity.length;i++){
        details=[...details,{color:colors[i],quantity:quantity[i]}]
    }
    }
 
    const order = { orderedDate: format(selected, 'PP'), targetDate: format(completed, 'PP') };
    const orderDetails = { ...companyName, ...e, ...order,color:details};
    setBody(orderDetails)
    if(data){
      console.log(data)
      const notify = () => toast('Order List Added Succesfully');
            notify()
    }
    setCompanyName({ companyName: '', buyerName: '' });
    reset();
    console.log({date:format(selected, 'PP')});
  }

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
                options={products?.products}
                sectionName={'productName'}
                placeholder={'Select your Product Name'}
                register={register}
              />

              <DateInput
                label={`Ordered Date : ${selected && format(selected, 'PP')}`}
                selected={selected}
                onSelect={setSelected}
              ></DateInput>
            </div>
          
            <div className='my-4 w-5/12'>
              <InputForm
                label={'P.O Number'}
                register={register}
                name={'poNumber'}
                type='text'
              />
              <InputForm
                label={'style'}
                register={register}
                name={'style'}
                type='text'
              />
              {/* <MoreInput
            handleAdd={handleAdd}
            handleChange={handleChange}
            handleRemove={handleRemove}
            val={val}
            setVal={setVal}
            component={'Style'}
          /> */}
          <QuantityOrder quantity={quantity} setQuantity={setQuantity} setTotalQty={setTotalQty} setColors={setColors}/>
        <p>Estimated Quantity : {totalQty || isNaN(totalQty) && ''}</p>
              <InputForm
                label={'Quantity'}
                register={register}
                name={'quantity'}
                type='text'
              />
              <DateInput
                label={`Target Date : ${completed && format(completed, 'PP')}`}
                selected={completed}
                onSelect={setCompleted}
              ></DateInput>
            </div>
          </div>

          <div className='flex text-center justify-center my-4'>
            <button className='btn btn-primary'>Insert </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddOrders;
