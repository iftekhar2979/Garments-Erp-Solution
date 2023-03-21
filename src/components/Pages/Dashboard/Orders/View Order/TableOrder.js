import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../../../../../Assets/edit.svg';
const TableOrder = ({contents}) => {
    const {companyName,buyerName,poNumber,productName,quantity,targetDate,style,orderedDate,_id}=contents
    return (
      <>
          <tr className="border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <th className="border font-medium text-gray-900 w-24 px-2">
                {companyName}
                </th>
                <td className=" border px-1 w-24">
                    {buyerName}
                </td>
                <td className="border px-1 w-24">
              <Link to={`/dashboard/po/${_id}`}>  <span className="link link-secondary">{poNumber}</span> </Link>
                </td>
                <td className="border  w-16">
                {style}
                </td>
                <td className="border px-1 w-16">
                    {productName}
                </td>
                <td className="border px-1 w-12 font-bold">
                    {Number(quantity).toLocaleString("en-US")}
                </td>
                <td className="border px-1 w-12 font-bold">
                    {}
                </td>
                <td className="border px-1 w-12 font-bold">
                    {}
                </td>
                <td className="border px-1 w-12 font-bold">
                    {}
                </td>
                <td className="border px-1 w-16">
                    {targetDate}
                </td>
                <td className="border px-1 w-16">
                    {orderedDate}
                    <div>
                   <Link to={`/dashboard/edit/${_id}`}><img src={editIcon} alt="" className='w-8 inline cursor-pointer ml-2 hover:bg-yellow-500'/></Link> 
                    </div>
                
                </td>
            </tr>
      </>
    );
};

export default TableOrder;