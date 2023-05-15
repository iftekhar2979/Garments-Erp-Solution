import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai"
import editIcon from '../../../../../Assets/edit.svg';
// import { format } from 'date-fns';
import {format} from "date-fns/esm"
import Modal from '../../../../Utility-Component/Modal';
import Spinner from '../../../../Utility-Component/Spinner';
const TableOrder = ({contents,handleRemove}) => {
   
    const {companyName,buyerName,orderNumber,productName,targetDate,orderedDate,_id,range,grandTotalQuantity,grandRestQuantity}=contents
    const deliveryTotal=grandTotalQuantity-grandRestQuantity
    // console.log(isLoading)
  
    return (
      <>
          <tr className="border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <th className="border font-medium pl-2 text-gray-900 w-20 ">
                {companyName}
                </th>
                <td className=" border px-1 w-16">
                    {buyerName}
                </td>
                <td className="border px-1 w-14">
                {productName}
              
                </td>
                <td className="border  w-16">
                {range}
                </td>
                <td className="border px-1 w-20">
                <Link to={`/dashboard/po/${_id}`} >  <span className="link link-secondary" >{orderNumber}</span> </Link>
                </td>
                
                <td className="border px-1 w-20 font-bold">
                {grandTotalQuantity &&grandTotalQuantity?.toLocaleString()}
                </td>
                <td className="border px-1 w-20 font-bold">
                   {isNaN(deliveryTotal) ?'':deliveryTotal.toLocaleString()}
                </td>
                <td className="border px-1 w-20 font-bold">
                {grandRestQuantity &&grandRestQuantity?.toLocaleString()}
                </td>
                
                <td className="border px-1 w-14">
                    {targetDate}
                </td>
                <td className="border px-1 w-16">
                    {contents?.status}
                  
                
                </td>
                <td className='border px-1 w-16'>
                    { contents?.completeDate ?format(new Date(contents?.completeDate),'PP' ):'' }
                    <br/>
                    <label htmlFor="my-modal-3" className='inline-block' onClick={()=>handleRemove(contents)}><AiFillDelete style={{fontSize:'2em' ,color:'red',cursor:'pointer'}}></AiFillDelete></label>
               
                
                </td>
                
            </tr>
      </>
    );
};

export default TableOrder;