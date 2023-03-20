import React from 'react';
import Buyers from './Buyers';

const TableContent = ({contents}) => {
    const {companyName,buyers,email,location,contact,createdDate}=contents
    // console.log(buyers)
    return (
        <>
        <tr class="border-b bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {companyName}
                </th>
                <td class="px-2  border py-2">
                    {buyers?.map((buyer,i)=><Buyers key={i} buyer={buyer}></Buyers>)}
                </td>
                <td class="px-2 border py-2">
                    {location}
                </td>
                <td class="px-2 border py-2">
                    {email}
                </td>
                <td class="px-2 border py-2">
                    {contact}
                </td>
                <td class="px-2 border py-2">
                    {createdDate}
                </td>
                
            </tr>
        </>
    );
};

export default TableContent;