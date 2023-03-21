import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../../Utility-Component/Heading';
import Table from '../../../Utility-Component/Table/Table';
import TableOrder from './View Order/TableOrder';

const ViewOrders = () => {
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
    const tableHeadings=[
        {
            id:4,
            heading:'COMP. NAME',
            class:"w-4"
        },
        {
            id:5,
            heading:"BUYER'S",
            class:"w-4"
        },{
            id:6,
            heading:"PO.NUM",
            class:"w-4"
        },{
            id:17,
            heading:"STYLE",
            class:"w-4"
        },{
            id:7,
            heading:"PRODUCT",
            class:"w-4"
        },
        {
            id:57,
            heading:"T. QTY.",
            class:"w-4"
        },
        {
            id:35,
            heading:"Or. QTY.",
            class:"w-4"
        },{
            id:59,
            heading:"Res. QTY.",
            class:"w-4"
        },
        {
            id:26,
            heading:"D. QTY.",
            class:"w-4"
        },
        {
            id:9,
            heading:'TAR. DATE',
            class:"w-4"
        },{
            id:29,
            heading:'OR. DATE',
            class:"w-4"
        }
    ]
    return (
        <div>
           <Heading heading={'View Your Order List'}/>
           <Table tableHeadings={tableHeadings} tableData={[]} >{
                [...orderList]?.reverse().map(item=><TableOrder key={item.id} contents={item}></TableOrder>)

            }</Table>
        </div>
    );
};

export default ViewOrders;