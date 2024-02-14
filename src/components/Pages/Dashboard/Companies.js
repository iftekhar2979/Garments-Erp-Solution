import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../Utility-Component/Heading';
import Table from '../../Utility-Component/Table/Table';
<<<<<<< HEAD
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
import Spinner from '../../Utility-Component/Spinner';
import { useGetCompanyQuery } from '../../../Redux/Features/api/apiSlice';
import Alert from '../../Utility-Component/Alert/Alert';
const tableHeadings = [
    {
        id: 4,
        heading: 'COMPANY NAME',      
    },
    {
        id: 5,
        heading: "BUYER'S"
    }, {
        id: 6,
        heading: "LOCATION"
    }, {
        id: 7,
        heading: "EMAIL"
    },
    {
        id: 8,
        heading: "CONTACT"
    }, {
        id: 9,
        heading: 'CREATED',
        class: 'w-24'
    }
]
const Companies = () => {
    useDocumentTitle('COMPANIES--ABC SOURCING')
    const { data: companies, isLoading, isError, refetch } = useGetCompanyQuery(undefined, {
        refetchOnMountOrArgChange: 600,
        keepUnusedDataFor: 14400,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })
    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <Alert alertDescription={'Something Error In Sever Please Try again'} className='w-fit mx-auto my-6' role={'alert alert-error'}></Alert>
    }

    return (
        <div>
            <Heading heading={'Your Subscribed Company and Details'}></Heading>
            <Table tableHeadings={tableHeadings} tableData={companies} refetch={refetch}></Table>
=======

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
            <Heading heading={'Your Subscribed Company and Details'}></Heading>
            <Table tableHeadings={tableHeadings} tableData={companies}></Table>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
        </div>
    );
};

export default Companies;