import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Heading from '../../../Utility-Component/Heading';
import Table from '../../../Utility-Component/Table/Table';
import TableOrder from './View Order/TableOrder';
import Modal from '../../../Utility-Component/Modal';
import Spinner from '../../../Utility-Component/Spinner';
const tableHeadings=[
    {
        id:4,
        heading:'COMP. NAME',
        class:"w-4"
    },
    {
        id:5,
        heading:"BUYER",
        class:"w-4"
    },
    {
        id:7,
        heading:"PRODUCT",
        class:"w-4"
    },
    {
        id:17,
        heading:"RANGE",
        class:"w-4"
    },
    {
        id:6,
        heading:"ORD. NUM.",
        class:"w-4"
    },
    {
        id:35,
        heading:"ORD. QTY",
        class:"w-4"
    },
    {
        id:26,
        heading:"DELIVERY QTY",
        class:"w-4"
    },
    {
        id:59,
        heading:"REST QTY",
        class:"w-4"
    },
   
    {
        id:9,
        heading:'TAR. DATE',
        class:"w-4"
    },{
        id:29,
        heading:'STATUS',
        class:"w-4"
    },{
        id:456,
        heading:'COMP. DATE'
    }
]
const ViewOrders = () => {
    const [delDetail,setdelDetail]=useState()
    const { data: orderList = [],refetch,isLoading } = useQuery({
        queryKey: ['orderList'],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:8000/orderList`
          );
          const data = await res.json();
          return data;
        },
      });
 
     
    const handleRemove=(id)=>{
        // console.log(id)
        setdelDetail(id)
        // console.log(delDetail?.orderNumber)
    }
    if(isLoading){
     
        return <Spinner/>
       }
   
    return (
        <div>
           <Heading heading={'View Your Order List'}/>
           <Table tableHeadings={tableHeadings} tableData={[]} >{
                [...orderList]?.reverse().map(item=><TableOrder key={item.id} contents={item} handleRemove={handleRemove} isLoading={isLoading}></TableOrder>)

            }</Table>
             {delDetail && <Modal modalId="my-modal-3" desc={delDetail} setDesc={setdelDetail} refetch={refetch}></Modal>}
        </div>
    );
};

export default ViewOrders;