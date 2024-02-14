import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import { UidGenarate } from './Reducer/intialState';
import { useSelector } from 'react-redux';
import { isEmptyObj } from '../../../../CustomHooks/totalCounting';

let sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

const DeliverySizeTable = ({ options, size, sizeChange, defaultValue, value, isCheacked, total, restAllDelivery, copied, }) => {

 
  const { poState, sizeName } = useContext(ViewContextProvider)

  let select = (arr, obj) => arr.reduce((r, e) => Object.assign(r, obj[e] ? { [e]: obj[e] } : null), {});
  let output = select(sizeName, isEmptyObj(restAllDelivery)?defaultValue:restAllDelivery||{});
 
 


  return (
    <>
      {options?.map((singleSize, i) => {
        return (
          (poState?.sizeSystem === 'L-W-H') ?
            <>
              <tr key={i}>
                <td>
                  Size :
                </td>
                <td >
                  <input
                    type='text'
                    className={`border w-32   ${isCheacked && 'bg-gray-300'}  `}
                    name={'lwhSize'}
                    disabled={isCheacked ? true : false}
                    defaultValue={output ? output[singleSize] : 0}
                    onChange={sizeChange}
                  />
                </td>
              </tr>
            </>
            : (poState?.sizeSystem === 'SM-XL') ?
              <>
                <tr key={i} >
                  <td>{singleSize}</td>
                  <td >
                    <input
                      type='text'
                      className={`border w-32  ${isCheacked && 'bg-gray-300 cursor-not-allowed'}`}
                      name={singleSize}
                      onChange={sizeChange}
                      
                      // defaultValue={object?object[singleSize]:0}
                      defaultValue={output ? output[singleSize] : 0}
                      disabled={isCheacked ? true : false}
                    />
                  </td>
                </tr>
              </>
              :
              <>
                <tr key={i}>
                  <td>Input : </td>
                  <td>
                    <input
                      type='text'
                      className={`border w-32  ${isCheacked && 'bg-gray-300 cursor-not-allowed'}`}
                      name={'singleInput'}
                      disabled={isCheacked ? true : false}
                      defaultValue={output ? output[singleSize] : 0}
                      onChange={sizeChange}
                    />
                  </td>
                </tr>
              </>
        )
      })}
      <tr>
        <td >Total : </td>
        {
          total ?
            <td className="font-bold"> {isNaN(total) ? 0 : total}</td>
            :
            <td className="font-bold"> {value}</td>
        }

      </tr>
    </>
  );
};

export default memo(DeliverySizeTable);