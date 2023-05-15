import React, { useContext, useEffect, useState } from 'react';
import ColorTable from './ColorTable';
import { contextState } from './Reducer/intialState';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';


const PoTable = ({ quantity, style,isCheacked,setisCheacked}) => {
  const [arr, setArr] = useState(new Array(style?.colorQuantity));
  const {lwhHeading,tableHeadingsFull,sizes,status,poState}=useContext(ViewContextProvider)
  const [sizeName,setsizeName]=useState([])

useEffect(()=>{
  if(poState?.sizeSystem==="L-W-H"){
    setsizeName([...new Array(1)])
  }else if(poState?.sizeSystem==='SINGLE-INPUT'){
    let newLwh=new Array(poState?.sizeQuntities)
    setsizeName([...newLwh]) 
  }else{
    setsizeName(sizes)
  }
 },[poState?.sizeSystem,setsizeName]) 

  return (
    <>
      <tr className='border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>
        <th className='border font-medium text-gray-900 w-24 px-2'>
          <p>{style?.style}</p>
        </th>
        <td >
          <table>
         <thead>
          <tr>
              {(poState?.sizeSystem === 'L-W-H')?
              lwhHeading?.map((th,index) => (
                <th key={index}>{th.heading}</th>
              )):
              tableHeadingsFull?.map((th,index) => (
                <th key={index}>{th.heading}</th>
              ))}
              </tr>
            </thead>
            <tbody>
              {[...arr].map((item,index) => (
                <ColorTable options={sizeName} style={style?.style} key={index} isCheacked={isCheacked} setisCheacked={setisCheacked} status={status}/>
              ))}
            
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default PoTable;
