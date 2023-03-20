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
            heading:'COMPANY NAME'
        },
        {
            id:5,
            heading:"BUYER'S"
        },{
            id:6,
            heading:"PO NUMBER"
        },{
            id:7,
            heading:"PRODUCT"
        },
        {
            id:8,
            heading:"QUANTITY"
        },{
            id:9,
            heading:'ORDER DATE'
        },{
            id:9,
            heading:'TARGET DATE'
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