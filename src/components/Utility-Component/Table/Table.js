import React, { memo, useState } from 'react';
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
       deleteWithModal('${process.env.REACT_APP_DEVELOPMENT_URL}/companyList?id',delDetail?._id,setDelDetail,refetch)
    }
    
    return (
   
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 my-6  overflow-x-hidden">
    <table className="w-full text-sm border text-left bg-white text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-black uppercase bg-white  dark:bg-gray-700 dark:text-gray-400">
            <tr className='border text-[9pt] '>
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
       {delDetail && <Modal modalId={'my-modal-4'} item={'Do You Want to Delete Company'} desc={delDetail?.companyName} handleDelete={handleDelete} id={delDetail?._id} setDesc={setDelDetail}/>}
    
       <Modal modalId={'my-modal-forEdit'} item={'Company'} desc={'Edit'}/>
    
    </table>
</div>
    );
};

export default memo(Table);