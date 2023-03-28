import React, { useEffect, useState } from 'react';
import { totalCount } from '../../../../CustomHooks/totalCounting';
import InputDropDown from '../../../../Utility-Component/Form/InputDropDown';
import SizeTable from './SizeTable';

const ColorTable = ({ options, status }) => {
  const [size, setSize] = useState({});
  const [deliverySize, setDeliverSize] = useState({});
  const [restSize, setRestSize] = useState({});
  const [total, setTotal] = useState(0);
  const [deliveryTotal, setDeliveryTotal] = useState(0);
  const [restTotal, setRestTotal] = useState(0);

  useEffect(() => {
    // total Quantity of sizes
    setTotal(totalCount(size));
    //delivery Quantity of Sizes
    setDeliveryTotal(totalCount(deliverySize));
    //rest Quantity of Sizes
    setRestTotal(totalCount(restSize));
    //counting rest Quantities
    let restObj = Object.keys(size).reduce((prevObj, keys) => {
      prevObj[keys] = size[keys] - deliverySize[keys];
      if (isNaN(prevObj[keys])) {
        prevObj[keys] = 0;
      }
      return prevObj;
    }, {});

    setRestSize(restObj);
  }, [
    setSize,
    setTotal,
    size,
    deliverySize,
    setRestSize,
    setDeliveryTotal,
    setDeliverSize,
    restSize,
    setRestTotal,
  ]);

  //total quantities of size handle Change

  const sizeChange = (e) => {
    let values = e.target.value;
    if (isNaN(values)) {
      values = 0;
    }
    setSize((prev) => {
      return { ...prev, [e.target.name]: parseFloat(values) };
    });
  };
  //delivery quantities of size handle Change
  const deliverySizeChange = (e) => {
    let values = e.target.value;
    if (isNaN(values)) {
      values = 0;
    }
    setDeliverSize((prev) => {
      return { ...prev, [e.target.name]: parseFloat(values) };
    });
  };

  return (
    <>
      <tr className='w-full'>
        <td className='border  w-36'>
          <input
            type='text'
            className='text-md p-2 h-16 w-full border border-md'
            name='colorName'
          />
        </td>
        <td className='border w-36'>
          <SizeTable
            options={options}
            total={total}
            defaultValue={0}
            sizeChange={sizeChange}
          ></SizeTable>
        </td>
        <td className='border w-36'>
          <SizeTable
            options={options}
            total={deliveryTotal}
            sizeChange={deliverySizeChange}
            defaultValue={0}
          ></SizeTable>
        </td>

        <td className='border w-36'>
          <SizeTable
            options={options}
            total={restTotal}
            defaultValue={restSize}
          ></SizeTable>
        </td>
        <td className='border w-24'>
          <p>Completed Date</p>
        </td>
        <td className='border w-36'>
          <textarea
            className='textarea textarea-bordered'
            placeholder='Bio'
          ></textarea>
        </td>
        <td className='border w-36 '>
          <InputDropDown
            sectionName={'status'}
            className='w-full'
            options={status}
            // handleInputDropdown={updateData}
            placeholder={'Status'}
          ></InputDropDown>
        </td>
        <td className='border w-16'>
          <button className='btn btn-sm my-4'>submit</button>
        </td>
      </tr>
    </>
  );
};

export default ColorTable;
