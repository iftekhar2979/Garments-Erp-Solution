import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Heading from '../../Utility-Component/Heading';
import Table from '../../Utility-Component/Table/Table';
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
        </div>
    );
};

export default Companies;