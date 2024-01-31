import react, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../Utility-Component/Heading';
import { UidGenarate } from '../Orders/View PO/Reducer/intialState';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Utility-Component/Spinner';
import Pagination from '../../../Utility-Component/Pagination';
import Table from '../../../Utility-Component/Table/Table';
import ChalanListTable from './ChalanListTable';
import Searching from '../../../Utility-Component/Filters/Searching';
import { emptyObjectChecker } from '../../../CustomHooks/Functions.js/emptyObjChecker';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { chalanPageChanging, chalanSearching, chalanUrlChanging, clearingChalanFilter, decrementFirstPage, incrementFirstPage, lastPageDecrement, lastPageIncrement } from '../../../../Redux/Features/orderListFilter/orderListFilter';
import Alert from '../../../Utility-Component/Alert/Alert';
import FilterAllButton from '../../../Utility-Component/Filters/FilterAllButton';
import usePaginationNextAndPrev from '../../../CustomHooks/usePaginationNextAndPrev';
const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'Company',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Buyer',
        class: 'px-1'

    },
    {  id: UidGenarate(),
        heading: 'Order Num.',
        class: 'px-1'

    }, {
        id: UidGenarate(),
        heading: 'Product',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Chalan Number',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Delivered Quantity',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Created At',
        class: 'px-1'

    },

]
const fetchOrder = async (url) => {
    const res = await fetch(url,{credentials:'include'})
    const data = await res.json()
    return data
}
export const ChalanList = () => {
    let count 
    const { chalanFiltering: { page: pageState, url: urlOfChalans, lastPage, firstPage, isSearched, searchedKeyWords, searchPageNumber } } = useSelector(state => state.orderListFilter)
    const { data: chalanList = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: [urlOfChalans],
        queryFn: () => fetchOrder(urlOfChalans),
        dependencies: [urlOfChalans],
        keepPreviousData: 600,
        refetchOnReconnect:true,
        refetchOnWindowFocus:true,
        
    });
    const dispatch = useDispatch()
    const { handleNext, handlePrev } = usePaginationNextAndPrev({
        filterName: 'chalanFiltering',
        PageChanging: chalanPageChanging,
        incrementFirstPage: incrementFirstPage,
        lastPageIncrement: lastPageIncrement,
        decrementFirstPage: decrementFirstPage,
        lastPageDecrement: lastPageDecrement,
        page: pageState,
        count,
        firstPage:firstPage,
        lastPage:lastPage
    })
    const pageRef = useRef(false)
    useEffect(() => {
        if (pageRef.current) {
            let url = `${process.env.REACT_APP_DEVELOPMENT_URL}/chalanLists?page=${pageState}`
            dispatch(chalanUrlChanging(url))
        }
        if (isSearched) {
            let url = `${process.env.REACT_APP_DEVELOPMENT_URL}/chalanLists?chalanNumber=${searchedKeyWords}&page=0`
            dispatch(chalanUrlChanging(url))
        }
    }, [pageState, pageRef, urlOfChalans, searchPageNumber, isSearched, searchedKeyWords])

    let content
    if (emptyObjectChecker(chalanList)) {
        content = <Spinner />
    }

    if (chalanList?.error) {
        content = <Alert alertDescription={'Something Error In Sever Please Try again'} className='w-fit mx-auto my-6' role={'alert alert-error'}></Alert>
    }

    const { count: documentCount = 0, result: findingData = [] } = chalanList

     count = Math.ceil(documentCount / 30)


    const handlePage = (id) => {
        pageRef.current = true
        dispatch(chalanPageChanging(id))
        if (isSearched) {
            pageRef.current = false
            dispatch(chalanPageChanging(id))

        }
    }
    const handleSearch = (text) => {
        pageRef.current = false
        dispatch(chalanSearching(text))
        dispatch(chalanPageChanging(0))

    }
    const handleAll = () => {
        pageRef.current = true
        dispatch(clearingChalanFilter(''))
    }
    const filterObjectPropertyForPagination = { pageState, searchPageNumber }

    if (!isLoading && !emptyObjectChecker(chalanList)) {
        content =
            <>
                <Table tableHeadings={tableHeadings} tableData={[]}>
                    {Array.isArray(findingData) && [...findingData]?.map(item => <ChalanListTable key={UidGenarate()} detail={item} ></ChalanListTable>)}
                </Table>
                <Pagination count={count} handlePrev={handlePrev} handleNext={handleNext} firstPage={firstPage} lastPage={lastPage} filterObjectPropertyForPagination={filterObjectPropertyForPagination} handlePage={handlePage} />
            </>
    }

    return (
        <>
            <Heading heading={"Chalan List and Delivered Product Information"} />
            <div className='flex justify-between'>
                <FilterAllButton
                    className={`block border-b ${!isSearched ? "h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 text-white py-4" : "h-14 bg-white text-black "} hover:bg-gray-200  px-2 font-semibold ml-4 `}
                    handleAll={handleAll}
                    label={"All Chalan"}
                />
                <Searching handleSearch={handleSearch} searchedKeyWords={searchedKeyWords} placeholder={'Chalan No...'} />
            </div>
            {content}
        </>
    )
};

export default ChalanList;