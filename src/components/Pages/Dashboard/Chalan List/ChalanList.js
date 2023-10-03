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
const fetchOrder = async (page = 0, url) => {
    try {
        const res = await fetch(`${url}page=${page}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }


}
export

    const ChalanList = () => {
        const [url, setUrl] = useState(`http://localhost:8000/ChalanLists?`)
        const [page, setPage] = useState(0)
        const [searched,setsearched]=useState(false)
        const { data: chalanList = [], refetch, isLoading, isError, error } = useQuery({
            queryKey: [ url, page],
            queryFn: () => fetchOrder(page, url),
            dependencies: [page, url],
            keepPreviousData: true
        });
        useEffect(() => {
            // const names = companyData?.map(item => item?.companyName)
            // setCompanyName(names)

            if (!searched) {
                setUrl(`http://localhost:8000/ChalanLists?`)
            }
    
        }, [ searched])
        // console.log(isLoading)
        let content
        if (emptyObjectChecker(chalanList)||isLoading ) {
         
            content = <Spinner />
        }

        if ((isError && error) || emptyObjectChecker(chalanList)) {

            content = <h2 className='text-center text-4xl text-red-400'>No Data Found!!</h2>
        }

        const { count: documentCount = 0, result: findingData = [] } = chalanList

        const count = Math.ceil(documentCount / 30)


        const handlePage = (id) => {
            setPage(id)
        }
        const handleSearch = (text) => {
            setsearched(true)
            setUrl(`http://localhost:8000/ChalanLists?chalanNumber=${text}&`)
            setPage(0)
        }
        const handleAll=()=>{
            setsearched(false)
        }

        if (!isLoading && !emptyObjectChecker(chalanList)) {
            content =
                <>
                    <Table tableHeadings={tableHeadings} tableData={[]}>
                        {Array.isArray(findingData) && [...findingData]?.map(item => <ChalanListTable key={UidGenarate()} detail={item} ></ChalanListTable>)}
                    </Table>
                    <Pagination count={count} page={page} handlePage={handlePage} />
                </>
        }
        return (
            <>
                <Heading heading={"Chalan List and Delivered Product Info"} />
                <div className='flex justify-between'>
                <button className='block border-b border-white shadow rounded bg-white h-[3rem] hover:bg-gray-200  px-2 font-semibold mt-4 ml-4 ' onClick={handleAll}> ALL</button>
                <Searching handleSearch={handleSearch} placeholder={'Chalan No...'} />
                </div>
                {content}



            </>
        )
    };

export default ChalanList;