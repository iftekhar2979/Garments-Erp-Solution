import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import Heading from '../../../Utility-Component/Heading';
import Table from '../../../Utility-Component/Table/Table';
import TableOrder from './View Order/TableOrder';
import Modal from '../../../Utility-Component/Modal';
import Spinner from '../../../Utility-Component/Spinner';
import { deleteWithModal } from '../../../CustomHooks/Functions.js/deleteRequest';
import useDocumentTitle from '../../../CustomHooks/useDocumentTitle';
import { UidGenarate } from './View PO/Reducer/intialState';
import FilterDropDown from '../../../Utility-Component/Filters/FilterDropDown';
import Searching from '../../../Utility-Component/Filters/Searching';
import { useGetBuyersQuery, useGetCompanyNamesQuery, useGetProductsQuery } from '../../../../Redux/Features/api/apiSlice';
import Pagination from '../../../Utility-Component/Pagination';
const tableHeadings = [
    {
        id: 4,
        heading: 'COMPANY',
        class: "w-4"
    },
    {
        id: 5,
        heading: "BUYER",
        class: "w-4"
    },
    {
        id: 7,
        heading: "PRODUCT",
        class: "w-4"
    },
    {
        id: 17,
        heading: "RANGE",
        class: "w-4"
    },
    {
        id: 25,
        heading: 'TB NUM.',
        class: 'w-4'
    },
    {
        id: 6,
        heading: "ORD. NUM.",
        class: "w-4"
    },
    {
        id: 35,
        heading: "ORD. QTY",
        class: "w-4"
    },
    {
        id: 26,
        heading: "DEL. QTY",
        class: "w-4"
    },
    {
        id: 59,
        heading: "REST QTY",
        class: "w-4"
    }, {
        id: 27,
        heading: 'ORD. DATE',
        class: "w-4"
    },

    {
        id: 9,
        heading: 'TAR. DATE',
        class: "w-4"
    },
    {
        id: 29,
        heading: 'STATUS',
        class: "w-4"
    }, {
        id: 456,
        heading: 'COM. DATE',
        class: "w-4"
    }
]
const status = ['Ordered', 'Completed', 'Pending', "Canceled"]
const fetchOrder = async (page = 0, url) => {
    const res = await fetch(`${url}page=${page}`)
    const data = await res.json()
    return data
}
const ViewOrders = () => {

    // let page=0
    useDocumentTitle('View Orders Dashboard')
    // const { data:companyData} = useGetCompanyNamesQuery(undefined,{
    //     refetchOnMountOrArgChange:5
    // })
    // const {data:product}=useGetProductsQuery(undefined,{
    //     refetchOnMountOrArgChange:5
    // })
    const { data = [], isLoading: listLoading } = useGetBuyersQuery(undefined, {
        refetchOnMountOrArgChange: 10
    })
    // console.log(data[0])

    const [filterSTring, setFilterString] = useState('')
    const [page, setPage] = useState(0)
    const [filtered, setFiltered] = useState(false)
    const [url, setUrl] = useState(`http://localhost:8000/orderList?`)
    const [companyName, setCompanyName] = useState([])
    const [delDetail, setdelDetail] = useState()
    const [searched, setsearched] = useState(false);
    const { data: orderList = [], refetch, isLoading } = useQuery({
        queryKey: ['orderList', url, page],
        queryFn: () => fetchOrder(page, url),
        dependencies: [page, url],
        keepPreviousData: true
    });

    const singleStateRef = useRef(0);


    useEffect(() => {
        // const names = companyData?.map(item => item?.companyName)
        // setCompanyName(names)

        if (!filtered) {
            setUrl(`http://localhost:8000/orderList?`)

        }
        if (!searched) {
            setUrl(`http://localhost:8000/orderList?`)
        }

    }, [filtered, searched])
    const handleFilter = (filter, property) => {
        setFiltered(true)
        setUrl(`http://localhost:8000/filterOrderList?${property}=${filter}&`)
        setPage(0)
    }

    const { documentCount, findingData } = orderList

    const count = Math.ceil(documentCount / 15)

    const handleRemove = (id) => {
        setdelDetail(id)
    }

    const handleSearch = (text) => {
        setsearched(true)
        setUrl(`http://localhost:8000/search?orderNumber=${text}&`)
        setPage(0)


    }
    const handleAll = () => {
        setFiltered(false)
        setsearched(false)
    }
    const handlePage = (id) => {

        setPage(id)
    }

    const handleDelete = (id) => {
        deleteWithModal('http://localhost:8000/orderList?id', id, setdelDetail, refetch)
    }
    if (listLoading) {
        return <Spinner />
    }
    const { buyerList = [], companyList = [], productList = [] } = data[0]
    let tableContent
    let paginationLine
    if (isLoading) {
        console.log(isLoading)
        tableContent = <Spinner />
        paginationLine = ''
    }
    if (!isLoading) {
        tableContent = <>

            <Table tableHeadings={findingData.length === 0 ? '' : tableHeadings} tableData={[]} >{
                Array.isArray(findingData) && [...findingData]?.map(item => <TableOrder key={item._id} contents={item} handleRemove={handleRemove} isLoading={isLoading}></TableOrder>)

            }</Table>
        </>
        paginationLine = <> <Pagination count={count} page={page} handlePage={handlePage} /> </>
    }
    return (
        <div>
            <Heading heading={' Order Lists'} />

            <div className='flex items-center'>
                <button className='block border-b border-gray-200 bg-white h-14 hover:bg-gray-200  px-2 font-semibold ml-4 ' onClick={handleAll}> ALL</button>
                <FilterDropDown companyName={companyList} label={'Company'} propertyName={'companyName'} handleFilter={handleFilter} />
                <FilterDropDown companyName={productList} label={'Product'} propertyName={'productName'} handleFilter={handleFilter} />
                <FilterDropDown companyName={status} label={'Status'} propertyName={'status'} handleFilter={handleFilter} />
                <FilterDropDown companyName={buyerList} label={'Buyers'} propertyName={'buyerName'} handleFilter={handleFilter} />
                <Searching handleSearch={handleSearch} placeholder={'Order / TB / Range'} />
            </div>
            {/* {findingData.length === 0 ? <h1 className='text-center text-4xl text-red-500'>NO DATA FOUND</h1> : ''} */}
            {tableContent}
            {paginationLine}
            {delDetail && <Modal modalId="my-modal-3" desc={delDetail?.orderNumber} item={'Order Number'} handleDelete={handleDelete} id={delDetail?._id} setDesc={setdelDetail} refetch={refetch}></Modal>}
        </div>
    );
};

export default ViewOrders;