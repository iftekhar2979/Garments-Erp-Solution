import React, { useState } from 'react';
import TableContent from './TableContent';
import TableHeading from './TableHeading';
import Modal from '../Modal';
import { deleteWithModal } from '../../CustomHooks/Functions.js/deleteRequest';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Table = ({tableHeadings,tableData,children,refetch}) => {
    // console.log(tableData)
    const [delDetail,setDelDetail]=useState()
    const handleRemove=(contents)=>{
        setDelDetail(contents)
    }
    const handleDelete=()=>{
       deleteWithModal('http://localhost:8000/companyList?id',delDetail?._id,setDelDetail,refetch)
    }
    
    return (
   
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 my-6">
    <table className="w-full text-sm border text-left bg-white text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-black uppercase bg-white  dark:bg-gray-700 dark:text-gray-400">
            <tr className='border '>
               { tableHeadings && tableHeadings?.map(heading=><TableHeading key={heading.id} headings={heading.heading} className={heading.class}></TableHeading>)}
            </tr>
        </thead>
        <tbody className='bg-white'>{
            children
            }
            
            {
                [...tableData]?.map(item=><TableContent key={item.id} handleRemove={handleRemove} contents={item}></TableContent>)

            }
        </tbody>
       {delDetail && <Modal modalId={'my-modal-4'} item={'Comapany'} desc={delDetail?.companyName} handleDelete={handleDelete} id={delDetail?._id} setDesc={setDelDetail}/>}
    </table>
</div>
    );
};

export default Table;