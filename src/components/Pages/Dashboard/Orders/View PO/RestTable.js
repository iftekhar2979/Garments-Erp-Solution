<<<<<<< HEAD
import { memo, useContext, useEffect, useState } from "react";
import { ViewContextProvider } from "../../../../contextApi/ViewContext";
import { UidGenarate } from "./Reducer/intialState";

const RestTable = ({ options, size, sizeChange, defaultValue, total, value }) => {

  const { sizeName } = useContext(ViewContextProvider)
  
  let select=(arr, obj) => {
    const selectedProperties = arr.reduce((result, key) => {
      if (obj[key]) {
        result[key] = obj[key];
      }
      return result;
    }, {});
    
    return selectedProperties;
  };
  let output = select(sizeName, defaultValue||{});

//  console.log(defaultValue,'defBa;')
  return (
    <>
      {options?.map((singleSize, i) => {

        return (
          <tr key={UidGenarate()}>
            <td>{sizeName.length === 1 ? 'Input' : singleSize}</td>
            <td>
              <td
                className='border w-36 h-1 bg-gray-200 text-center'
                name={singleSize}

              >
                {output[singleSize] ? output[singleSize] : 0}

              </td>
            </td>

          </tr>
        );
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

=======
const RestTable = ({ options, size, sizeChange, defaultValue, total }) => {
  return (
    <>
      <table className='my-2'>
        <tbody>
          {options?.map((singleSize, i) => {
            return (
              <tr key={i}>
                <td>{singleSize}</td>
                <td>
                  <td
                    className='border w-20 bg-gray-200 text-center'
                    name={singleSize}
                  >
                    {defaultValue[singleSize]}
                  </td>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="w-12">Total : </td>
            <td className="font-bold"> {isNaN(total) ? 0 : total}</td>
          </tr>
        </tbody>
      </table>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    </>
  );
};

<<<<<<< HEAD
export default memo(RestTable);
=======
export default RestTable;
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
