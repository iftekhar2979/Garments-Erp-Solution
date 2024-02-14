import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit,AiOutlineCopy } from "react-icons/ai"

import { format } from "date-fns/esm"
import { useDispatch, useSelector } from 'react-redux';
import { lastClickedRoute } from '../../../../../Redux/Features/orderListFilter/orderListFilter';

const TableOrder = ({ contents, handleRemove ,handleCopy}) => {
    const {orderFiltering: {lastClicked}}=useSelector(state=>state.orderListFilter)
    const dispatch=useDispatch()

    const { companyName, buyerName, orderNumber, tbNumber, productName,completeDate='', status = '',season='', targetDate, orderedDate, _id, range, grandTotalQuantity, grandRestQuantity } = contents
    const deliveryTotal = grandTotalQuantity - grandRestQuantity
    
    let statusColor = (props) => {
        switch (props) {
            case "":
                return '';       
            case "Completed":            
              return 'bg-lime-200 text-lime-600 font-bold text-sm rounded-md py-1';       
            case "Pending":
              return 'bg-green-200 text-green-600 font-bold text-sm rounded-md py-1 ';       
            case "Ordered":
              return ' bg-yellow-100 text-yellow-600 font-bold text-sm rounded-md py-1';    
            case "Canceled":
              return ' bg-red-100 text-red-600 font-bold text-sm rounded-md py-1';
            default:
              return 'text-gray-300'; // Default class for unknown status
          }
    }

   const handleLastRoute=()=>{
    dispatch(lastClickedRoute({filterName:"orderFiltering",value:orderNumber}))
   }
let lastClickedClass=()=>{
    return (lastClicked===orderNumber)?'link link-success':`link link-secondary`
}
    return (
        <>
            <tr className={`border text-[9pt] bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                <th className="border px-1 font-medium  text-gray-900 w-20 ">
                    {companyName}
                </th>
                <td className=" border px-1 w-10">
                    {buyerName}
                </td>
                <td className="border px-1 w-14">
                    {productName}

                </td>
                <td className="border  w-16">
                    {range}
                </td>
                <td className="border  w-16">
                    {tbNumber}
                </td>
                <td className="border  w-10">
                    {season}
                </td>
                <td className="border px-1 w-16">
                    <Link to={`/dashboard/po/${_id}`} >  <span className={lastClickedClass()} onClick={handleLastRoute} >{orderNumber}</span> </Link>
                </td>

                <td className="border px-1 w-16 font-bold">
                    {grandTotalQuantity && grandTotalQuantity?.toLocaleString()}
                </td>
                <td className="border px-1 w-16 font-bold">
                    {isNaN(deliveryTotal) ? '' : deliveryTotal.toLocaleString()}
                </td>
                <td className="border px-1 w-16 font-bold">
                    {grandRestQuantity && grandRestQuantity?.toLocaleString()}
                </td>

                <td className="border  w-14">
                    {orderedDate && format(new Date(orderedDate), 'PP')}
                </td>
                <td className="border w-14">
                    {targetDate && format(new Date(targetDate), 'PP')}
                </td>
                <td className={`border px-1 w-16 text-center`}>
                    <span className={`${statusColor(status)}`}>{status}</span>
                </td>
                <td className='border px-1 font-bold w-16'>
                    {contents?.completeDate ? format(new Date(contents?.completeDate), 'PP') : ''}
                    <br />
                    <label htmlFor="my-modal-3" className='inline-block tooltip' data-tip="Delete Order" onClick={() => handleRemove(contents)}><AiFillDelete style={{ fontSize: '1.5em', color: 'red', cursor: 'pointer' }}></AiFillDelete></label>
                    <label htmlFor="my-modal-11" className='inline-block tooltip' data-tip="Copy Order" onClick={()=>handleCopy(contents)} ><AiOutlineCopy style={{ fontSize: '1.5em', color: 'green', cursor: 'pointer' }}></AiOutlineCopy></label>
                    <label className='inline-block tooltip' data-tip="Edit">  <Link to={`/dashboard/edit/${_id}`} ><AiFillEdit style={{ fontSize: '1.5em', color: 'green', cursor: 'pointer' }} /></Link></label>

                </td>

            </tr>
        </>
    );
};

export default TableOrder;