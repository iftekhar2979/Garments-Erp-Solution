import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../../../Assets/delete.svg';
import editIcon from '../../../../../Assets/edit.svg';
const TableOrder = ({contents}) => {
    const {companyName,buyerName,poNumber,productName,quantity,targetDate,orderedDate,_id}=contents
    return (
      <>
          <tr class="border-b bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {companyName}
                </th>
                <td class="px-2  border py-4">
                    {buyerName}
                </td>
                <td class="px-2 border py-4">
                <span className="link link-secondary">{poNumber}</span> 
                </td>
                <td class="px-2 border py-4">
                    {productName}
                </td>
                <td class="px-2 border py-4">
                    {quantity}
                </td>
                <td class="px-2 border py-4">
                    {targetDate}
                </td>
                <td class="px-2 border py-4">
                    {orderedDate}
                    <div>
                   <Link to={`/dashboard/edit/${_id}`}><img src={editIcon} alt="" className='w-8 inline cursor-pointer ml-2 hover:bg-yellow-500'/></Link> 
                <img src={deleteIcon} alt="" className='w-8 inline cursor-pointer ml-2 hover:bg-red-700'/>
                    </div>
                
                </td>
            </tr>
      </>
    );
};

export default TableOrder;