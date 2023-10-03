import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../Utility-Component/Heading';
import Table from '../../Utility-Component/Table/Table';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
import Spinner from '../../Utility-Component/Spinner';
import { useGetCompanyQuery } from '../../../Redux/Features/api/apiSlice';
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
const Companies = () => {
    useDocumentTitle('COMPANIES--ABC SOURCING')
    const {data:companies,isLoading,isError,refetch}=useGetCompanyQuery(undefined,{
       refetchOnMountOrArgChange:true,
       refetchOnFocus:true,
       refetchOnReconnect:true
    })
    // const { data: companies = [],refetch,isLoading } = useQuery({
    //     queryKey: ['companies'],
    //     queryFn: async () => {
    //       const res = await fetch(
    //         `http://localhost:8000/companies`
    //       );
    //       const data = await res.json();  
    //       return data;
    //     },
    //   });
    if(isLoading){
        return <Spinner/>
    }
    if(isError){
        return <h1>Something Error in Server </h1>
    }
    
    return (
        <div>
            <Heading heading={'Your Subscribed Company and Details'}></Heading>
            <Table tableHeadings={tableHeadings} tableData={companies} refetch={refetch}></Table>
        </div>
    );
};

export default Companies;