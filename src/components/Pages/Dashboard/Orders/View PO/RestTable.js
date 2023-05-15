import { useContext, useEffect, useState } from "react";
import { ViewContextProvider } from "../../../../contextApi/ViewContext";

const RestTable = ({ options, size, sizeChange, defaultValue, total ,value}) => {
  const { poState,sizeName } = useContext(ViewContextProvider)
  let select = (arr, obj) => arr.reduce((r, e) => Object.assign(r, obj[e] ? {[e]: obj[e]} : null), {})
  let output = select(sizeName, defaultValue)

  return (
    <>
      <table className='my-2'>
        <tbody>
          {options?.map((singleSize, i) => {
            
            return (
              <tr key={i}>
                <td>{ sizeName.length===1?'Input': singleSize  }</td>
                <td>
                  <td
                    className='border w-20 bg-gray-200 text-center'
                    name={singleSize}
                  >
                   {output[singleSize] ?output[singleSize] :0}
                 
                  </td>
                </td>
              </tr>
            );
          })}
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

export default RestTable;
