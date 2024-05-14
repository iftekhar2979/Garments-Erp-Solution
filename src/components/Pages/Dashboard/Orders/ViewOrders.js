import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { Page } from '@react-pdf/renderer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changingPage, clearFiltering, clearSearching, decrementFirstPage, filterPageChanging, filtering, incrementFirstPage, lastPageDecrement, lastPageIncrement, searchChanging, searchingPageChanging, urlChanging } from '../../../../Redux/Features/orderListFilter/orderListFilter';
import Alert from '../../../Utility-Component/Alert/Alert';
import FilterAllButton from '../../../Utility-Component/Filters/FilterAllButton';
import usePaginationNextAndPrev from '../../../CustomHooks/usePaginationNextAndPrev';
import { viewOrdersTableHeading } from '../../../../utils/headings';
import { reFetchingOrder } from '../../../../Redux/Features/RetchFunctions/refetchSlices';
import RefetchComponent from '../../../Utility-Component/RefetchComponent';
import { useGetSeasonByIdMutation, useGetSeasonByIdQuery } from '../../../../Redux/Features/api/seasonApi';
import { CSVLink } from "react-csv";
const status = ['Ordered', 'Completed', 'Pending', "Canceled"]
const fetchOrder = async (url) => {
    const res = await fetch(url, {
        credentials: 'include'
    })
    const data = await res.json()
    return data
}
const ViewOrders = () => {
    useDocumentTitle('View Orders Dashboard')
    let count
    const { data = [], isLoading: listLoading, isError: listError } = useGetBuyersQuery(undefined, {
        refetchOnMountOrArgChange: 600,
        keepUnusedDataFor: 14400,
    })
    const [getSeasonById, { data: seasonsSummary }] = useGetSeasonByIdMutation(undefined, {
        refetchOnMountOrArgChange: 600,
        keepUnusedDataFor: 14400,
    })

    const { orderFiltering: { filteredState, firstPage, lastPage, isFiltered, page: pageState, urlOfOrders, searchedKeyWords, isSearched, searchPageNumber, filteredPageNumber } } = useSelector(state => state.orderListFilter)
    const [page, setPage] = useState(0)
    const pageRef = useRef(false)
    const filterRef = useRef(false)
    const seasonRef = useRef(null)
    const [delDetail, setdelDetail] = useState()
    const [copy, setCopy] = useState()


    const { data: orderList = [], refetch, isLoading } = useQuery({
        queryKey: ['orderList', urlOfOrders],
        queryFn: () => fetchOrder(urlOfOrders),
        dependencies: [urlOfOrders],
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,

    });
    const dispatch = useDispatch()
    useEffect(() => {
        if (pageRef?.current) {
            let url = `${process.env.REACT_APP_DEVELOPMENT_URL}/api/orderList?page=${pageState}`
            dispatch(urlChanging(url))
        }
        if (isFiltered && filterRef) {
            let url = `${process.env.REACT_APP_DEVELOPMENT_URL}/api/${filteredState}&page=${filteredPageNumber}`
            dispatch(urlChanging(url)) //changing request url
            dispatch(clearSearching('')) // clear searching
            dispatch(searchingPageChanging(0)) //filtering page number 0
        }
        if (isSearched) {
            let url = `${process.env.REACT_APP_DEVELOPMENT_URL}/api/search?orderNumber=${searchedKeyWords}&page=${searchPageNumber}`
            dispatch(urlChanging(url))
            dispatch(clearFiltering())
            dispatch(filterPageChanging(0))
        }


    }, [pageState, urlOfOrders, pageRef, filterRef, filteredState, searchedKeyWords, filteredPageNumber, searchPageNumber])
    const handleFilter = (filter, property) => {
        dispatch(filtering(`filterOrderList?${property}=${filter}`))
        dispatch(filterPageChanging(0))

        getSeasonById({id:filter,query:property})
        seasonRef.current = filter

    }
    let headers = [
        { label: "Company", key: "company" },
        { label: "Buyer", key: "buyer" },
        { label: "Product", key: "product" },
        { label: "Quantity", key: "orderQuantity" }
    ];

    const { documentCount, findingData } = orderList
    count = Math.ceil(documentCount / 15)
    const handleRemove = (id) => {
        setdelDetail(id)
    }
    const handleCopy = (id) => {
        setCopy(id)
    }
    const handleSearch = (text) => {
        dispatch(searchChanging(text))
    }
    const handleAll = () => {
        pageRef.current = true
        dispatch(clearSearching(''))
        dispatch(clearFiltering())
        dispatch(filterPageChanging(0))
        dispatch(searchingPageChanging(0))
    }
    const handlePage = (id) => {
        if (!isFiltered && !isSearched) {
            pageRef.current = true
            dispatch(changingPage(id))
        }
        if (isFiltered) {
            filterRef.current = true
            dispatch(filterPageChanging(id))
        }
        if (isSearched) {
            dispatch(searchingPageChanging(id))
        }
    }
    let filterObjectPropertyForPagination = { pageState, filteredPageNumber, searchPageNumber, isSearched, isFiltered }
    const handleDelete = (id) => {
        deleteWithModal(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/orderList?id`, id, setdelDetail, refetch)
    }
    const handleCopyOrder = (id) => {
        axios.post(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/order/copy/${id}`, {}, { withCredentials: true })
            .then(res => {
                if (res.data) {
                    const notify = () => toast.success('Order Copied')
                    notify()
                    refetch()
                    setCopy('')
                }
            })
            .catch(error => {
                if (error) {
                    const notify = () => toast.error('Server Side Error')
                    notify()
                    refetch()
                    setCopy('')
                }
            })
    }
    const handleNext = () => {
        if (pageState === count) {
            dispatch(changingPage(pageState))
            return
        }
        if (lastPage === count) {
            dispatch(changingPage(pageState + 1))
            return
        }
        dispatch(changingPage(pageState + 1))
        dispatch(incrementFirstPage('orderFiltering'))
        dispatch(lastPageIncrement('orderFiltering'))
    }
    const handlePrev = () => {
        if (pageState === 0) {
            dispatch(changingPage(pageState))
            return
        }
        if (firstPage === 0) {
            dispatch(changingPage(pageState - 1))
            return
        }
        dispatch(changingPage(pageState - 1))
        dispatch(decrementFirstPage('orderFiltering'))
        dispatch(lastPageDecrement('orderFiltering'))
    }
    if (listLoading) {
        return <Spinner />
    }
    if (listError) {
        return <Alert alertDescription={'Something Error In Sever Please Try again'} className='w-fit mx-auto my-6' role={'alert alert-error'}></Alert>
    }
   
    const { buyerList = [], companyList = [], productList = [], seasonList = [] } = data[0]
    let tableContent
    let paginationLine
    if (isLoading) {
        tableContent = <Spinner />
        paginationLine = ''
    }
    if (!isLoading) {
        tableContent = <>
            <Table tableHeadings={findingData.length === 0 ? '' : viewOrdersTableHeading} tableData={[]} >{
                Array.isArray(findingData) && [...findingData]?.map(item => <TableOrder key={item._id} handleCopy={handleCopy} contents={item} handleRemove={handleRemove} isLoading={isLoading}></TableOrder>)
            }</Table>
        </>
        paginationLine = <> <Pagination count={count} handlePrev={handlePrev} handleNext={handleNext} firstPage={firstPage} lastPage={lastPage} page={page} filterObjectPropertyForPagination={filterObjectPropertyForPagination} handlePage={handlePage} /> </>
    }

    return (
        <div>
            <Heading heading={' Order Lists'} />
            <div className='flex items-center'>
                {/* <RefetchComponent handleRefetch={handleRefetch} /> */}
                <FilterAllButton
                    className={`block border-b ${(!isFiltered && !isSearched) ? "h-12  bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 text-white " : "h-12 bg-white text-black "} hover:bg-gray-200  px-2 font-semibold ml-4 `}
                    handleAll={handleAll}
                    label={"All Orders"}
                />
                <FilterDropDown companyName={companyList} label={'Company'} propertyName={'companyName'} handleFilter={handleFilter} />
                <FilterDropDown companyName={productList} label={'Product'} propertyName={'productName'} handleFilter={handleFilter} />
                <FilterDropDown companyName={status} label={'Status'} propertyName={'status'} handleFilter={handleFilter} />
                <FilterDropDown companyName={buyerList} label={'Buyers'} propertyName={'buyerName'} handleFilter={handleFilter} />
                <FilterDropDown companyName={seasonList} label={'Season'} propertyName={'season'} handleFilter={handleFilter} />
                <Searching handleSearch={handleSearch} searchedKeyWords={searchedKeyWords} placeholder={'Order / TB / Range'} />
                {seasonsSummary && <CSVLink data={seasonsSummary} headers={headers} filename={`${seasonRef.current}.csv`}
                    className="btn btn-primary btn-sm">
                    Download
                </CSVLink>}
            </div>
            {tableContent}
            {paginationLine}
            {delDetail && <Modal modalId="my-modal-3" desc={delDetail?.orderNumber} description={'Do You Want to Remove That'} item={'Order Number'} functionName={handleDelete} id={delDetail?._id} setDesc={setdelDetail} refetch={refetch}></Modal>}
            {copy && <Modal modalId="my-modal-11" description={"Do You Want to Copy "} desc={copy?.orderNumber} item={'Order Number'} functionName={handleCopyOrder} id={copy?._id} setDesc={setCopy} refetch={refetch}></Modal>}
        </div>
    );
};

export default ViewOrders;