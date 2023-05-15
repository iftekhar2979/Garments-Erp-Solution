import React, { useContext, useEffect, useState } from 'react';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';



const SizeTable = ({ options, size, sizeChange, defaultValue,value,isCheacked, total }) => {
  const { poState,sizeName } = useContext(ViewContextProvider)
// console.log('DEFAULT',defaultValues)
      let select = (arr, obj) => arr.reduce((r, e) => Object.assign(r, obj[e] ? {[e]: obj[e]} : null), {})
      let output = select(sizeName, defaultValue)

  return (
    <>
      <table className=''>
        <tbody>
          {options?.map((singleSize, i) => {
            return (
             ( poState?.sizeSystem === 'L-W-H') ?
              <>
                <tr key={i}>
                  <td>
                    Size :
                  </td>
                  <td>
                    <input
                      type='text'
                      className={`border w-32 ${isCheacked && 'bg-gray-300'}`}
                      name={'lwhSize'}
                    disabled={isCheacked?true:false}
                    value={output ? output[singleSize]:0}
                    
                      onChange={sizeChange}
                    />
                  </td>
                </tr>
                </>
                : (poState?.sizeSystem === 'SM-XL') ?
                  <>
                  <tr key={i}>
                    <td>{singleSize}</td>
                    <td>
                      <input
                        type='text'
                        className={`border w-32  ${isCheacked && 'bg-gray-300 cursor-not-allowed'}`}
                        name={singleSize}
                        onChange={sizeChange}
                        defaultValue={output ? output[singleSize]:0}
                        disabled={isCheacked?true:false}
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
                          disabled={isCheacked?true:false}
                          defaultValue={output ? output[singleSize]:0}
                          onChange={sizeChange}
                        />
                      </td>
                    </tr>
                    </>
          )})}
          <tr>
            <td >Total : </td> 
            {
              total ?
              <td className="font-bold"> {isNaN(total) ? 0 : total }</td>
              :
              <td className="font-bold"> {value }</td>
            }

          </tr> 
        </tbody>
      </table>
    </>
  );
};

export default SizeTable;
