import React, { useState } from 'react';
import Buyers from './Buyers';
import { AiFillDelete } from 'react-icons/ai';
import { CiEdit } from "react-icons/ci";

const TableContent = ({contents,handleRemove}) => {
    
    const {companyName,buyers,email,location,contact,createdDate,_id}=contents
   
    return (
        <>
        <tr className="border-b text-black border hover:bg-gray-100 dark:bg-gray-800 bg-white dark:border-gray-700">
                <th scope="row" className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {companyName}
                </th>
                <td className="px-2  border py-2">
                    {buyers?.map((buyer,i)=><Buyers key={i} buyer={buyer}></Buyers>)}
                </td>
                <td className="px-2 border py-2">
                    {location}
                </td>
                <td className="px-2 border py-2">
                    {email}
                </td>
                <td className="px-2 border py-2">
                    {contact}
                </td>
                <td className="px-2 border py-2">
                    {createdDate}
                    <br/>
                    <label htmlFor="my-modal-4" className='inline-block' onClick={()=>handleRemove(contents)}><AiFillDelete style={{fontSize:'2em' ,color:'red',cursor:'pointer'}}></AiFillDelete></label>
                    <label htmlFor="my-modal-forEdit" className='inline-block'><CiEdit style={{fontSize:'2em' ,color:'green',cursor:'pointer'}}/></label>
                </td>
                
            </tr>
        </>
    );
};

export default TableContent;