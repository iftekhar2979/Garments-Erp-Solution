import React, { useEffect, useState } from 'react';
import InputDropDown from '../../../../Utility-Component/Form/InputDropDown';

const PoTable = ({ quantity }) => {
  const [data, setData] = useState();
  const [deliveryQuantity, setDeliveryQuantity] = useState(0);
  const [amount, setAmout] = useState(0);

  useEffect(() => {
    setDeliveryQuantity(Number(quantity) - Number(data?.deliveryQuantity));
    setAmout(Number(quantity) * Number(data?.orderRate));
    console.log(amount);
  }, [deliveryQuantity,quantity, data?.deliveryQuantity,amount,data?.orderRate]);
  const updateData = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
 const amounts={deliveryQuantity,amount}

    console.log(amounts)
  };
  const  options = [
'SM','M','L','XL','XXL','XXL'  ]
const status=["Ordered",'Pending',"Completed","Canceled"]
  return (
    <>
      <tr className='border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>
        <th className='border font-medium text-gray-900 w-24 px-2'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            value={quantity}
            name='quantity'
            onChange={updateData}
          />
        </th>
        <td className=' border px-1 w-24'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md '
            name='orderRate'
            onChange={updateData}
          />
        </td>
        <td className='border px-1 w-16'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='actualRate'
            onChange={updateData}
          />
        </td>
        <td className='border  w-32'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='amount'
            value={amount.toFixed(4)}
            onChange={updateData}
          />
        </td>
        <td className='border px-1 w-16'>
        <InputDropDown sectionName={'size'} options={options} handleInputDropdown={updateData} placeholder={'Size'}></InputDropDown>
          
        </td>
        <td className='border px-1 w-16 '>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='targetQuantity'
            onChange={updateData}
          />
        </td>
        <td className='border px-1 w-16 '>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='restQuantity'
            value={deliveryQuantity}
            onChange={updateData}
          />
        </td>
        <td className='border px-1 w-16 '>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='deliveryQuantity'
            onChange={updateData}
          />
        </td>
        <td className='border px-1 w-16 '>
        <InputDropDown sectionName={'status'} options={status} handleInputDropdown={updateData} placeholder={'Status'} ></InputDropDown>
        </td>
      </tr>
      <div className='flex justify-center'>

        <button onClick={onSubmit} className='btn btn-primary my-4'>submit</button>
      </div>
    </>
  );
};

export default PoTable;
