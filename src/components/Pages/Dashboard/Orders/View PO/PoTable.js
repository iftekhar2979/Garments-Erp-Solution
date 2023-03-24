import React, { useEffect, useState } from 'react';
import InputDropDown from '../../../../Utility-Component/Form/InputDropDown';
import SizeTable from './SizeTable';

const PoTable = ({ quantity, color }) => {
  const [data, setData] = useState();
  const [restQuantity, setrestQuantity] = useState(0);
  const [amount, setAmout] = useState(0);
  const [totalQuanity, settotalQuanity] = useState(0);
  const [sizes, setSizes] = useState({});

  useEffect(() => {
    setrestQuantity(parseFloat(quantity) - parseFloat(data?.deliveryQuantity));
    setAmout(parseFloat(quantity) * parseFloat(data?.orderRate));
  }, [restQuantity, quantity, data?.deliveryQuantity, amount, data?.orderRate]);
  useEffect(() => {
    const reduced = Object.values(sizes);
    const total = reduced.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    settotalQuanity(total);
  }, [sizes]);
  const updateData = (e) => {
    
      let values =e.target.value
      if(isNaN(values)){
        values=0
      }
      setData((prev) => {
        return { ...prev, [e.target.name]: parseFloat(values) };
      });
 
  };
  const sizeChange = (e) => {
   
      let values = e.target.value
      if(isNaN(values)){
        values=0
      }
      setSizes((prev) => {
        return { ...prev, [e.target.name]: parseFloat(values) };
      });
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const sizeColorAndTotal = { color, sizes, total: totalQuanity };
    const amounts = { restQuantity, amount };
    const obj = { ...data, ...amounts, sizeColorAndTotal };
    console.log(obj);

    // console.log(amounts)
  };
  const sizeName = ["XS",'SM', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const status = ['Ordered', 'Pending', 'Completed', 'Canceled'];
  return (
    <>
      <tr className='border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>
        <th className='border font-medium text-gray-900 w-24 px-2'>
         <p>{color?.color}</p>
        </th>
        <td className=' border w-24'>
          <SizeTable
            options={sizeName}
         
            sizeChange={sizeChange}
            totalQuanity={totalQuanity}
          />
        </td>
        <td className='border w-16'>
          <input
            type='text'
            className='text-md p-2 w-full border border-md'
            value={ color?.quantity}
            name='quantity'
            
            onChange={updateData}
          />
        </td>
        <td className='border  w-16'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='deliveryQuantity'
            onChange={updateData}
          />
        </td>
        <td className='border w-16'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='restQuantity'
            value={restQuantity}

            onChange={updateData}
          />
        </td>
        <td className='border w-16 '>
          <input
            type='number'
            className='text-md p-2 w-full border border-md '
            name='orderRate'
           
            onChange={updateData}
          />
        </td>
        <td className='border w-16 '>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='actualRate'
            onChange={updateData}
          />
        </td>
        <td className='border w-24'>
          <input
            type='number'
            className='text-md p-2 w-full border border-md'
            name='amount'
            value={amount.toFixed(4)}
            
            onChange={updateData}
          />
        </td>
        <td className='border w-16 '></td>
        <td className='border w-16 '>
          <InputDropDown
            sectionName={'status'}
            className='w-16'
            options={status}
            handleInputDropdown={updateData}
            placeholder={'Status'}
          ></InputDropDown>
        </td>
        <td className='border w-16'>
          <button onClick={onSubmit} className='btn btn-sm my-4'>
            submit
          </button>
        </td>
      </tr>
    </>
  );
};

export default PoTable;
