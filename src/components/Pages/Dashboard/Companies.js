import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from '../../Utility-Component/Table/Table';

const Companies = () => {
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
            heading:"LOCATION"
        },{
            id:7,
            heading:"EMAIL"
        },
        {
            id:8,
            heading:"CONTACT"
        },{
            id:9,
            heading:'CREATED AD'
        }
    ]
    const { data: companies = [],refetch,isLoading } = useQuery({
        queryKey: ['companies'],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:8000/companies`
          );
          const data = await res.json();
     
          return data;
        },
      });
    if(isLoading){
        return <h1 className="text-4xl">Loading ....</h1>
    }
    
    return (
        <div>
            <Table tableHeadings={tableHeadings} tableData={companies}></Table>
        </div>
    );
};

export default Companies;