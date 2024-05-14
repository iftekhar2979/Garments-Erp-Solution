import react, { useState } from 'react';
import Heading from '../../../../Utility-Component/Heading';
import { useGetCreatedPIListsQuery } from '../../../../../Redux/Features/api/apiSlice';
import Spinner from '../../../../Utility-Component/Spinner';
import PiListTable from './PiListTable';
import { UidGenarate } from '../../Orders/View PO/Reducer/intialState';
import Table from '../../../../Utility-Component/Table/Table';
import { emptyObjectChecker } from '../../../../CustomHooks/Functions.js/emptyObjChecker';
import Modal from '../../../../Utility-Component/Modal';
import { deleteWithModal } from '../../../../CustomHooks/Functions.js/deleteRequest';
import usePaginationNextAndPrev from '../../../../CustomHooks/usePaginationNextAndPrev';
import Pagination from '../../../../Utility-Component/Pagination';
const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'Company',
        class: 'px-1 text-center'

    },
    {
        id: UidGenarate(),
        heading: 'PI Number',
        class: 'px-1 text-center'

    }, {
        id: UidGenarate(),
        heading: 'Total Quantity (pcs)',
        class: 'px-1 text-center'

    },
    {
        id: UidGenarate(),
        heading: 'Total Amount',
        class: 'px-1 text-center'

    },
    {
        id: UidGenarate(),
        heading: 'Created At',
        class: 'px-1 text-center'

    },

]

const PIList = (props) => {
    const { data: piList = [], isLoading, isError, refetch } = useGetCreatedPIListsQuery(undefined, {
        refetchOnMountOrArgChange: true
    })
    // const { handleNext, handlePrev } = usePaginationNextAndPrev({
    //     filterName: 'piFiltering',
    //     PageChanging: chalanPageChanging,
    //     incrementFirstPage: incrementFirstPage,
    //     lastPageIncrement: lastPageIncrement,
    //     decrementFirstPage: decrementFirstPage,
    //     lastPageDecrement: lastPageDecrement,
    //     page: pageState,
    //     count,
    //     firstPage:firstPage,
    //     lastPage:lastPage
    // })
    const [delDetail, setdelDetail] = useState({})
    if (isLoading) {
        return <Spinner />
    }
    const handleRemove = (id) => {
        setdelDetail(id)
    }
    const handleDelete = (id) => {
        deleteWithModal(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/deletePi?id`, id, setdelDetail, refetch)
    }
    let content
    if (!isLoading && !isError) {
        content =
            <>
                <Table tableHeadings={tableHeadings} tableData={[]}>
                    {Array.isArray(piList) && piList?.map(item => <PiListTable key={UidGenarate()} handleRemove={handleRemove} details={item} />)}
                </Table>
                {/* <Pagination count={count} handlePrev={handlePrev} handleNext={handleNext} firstPage={firstPage} lastPage={lastPage} filterObjectPropertyForPagination={filterObjectPropertyForPagination} handlePage={handlePage} /> */}
            </>
    }
    if (isError) {
        content = 'Something Wrong In Server !!!'
    }

    return (
        <>
            <Heading heading={"Proforma Invoice list and Delivery Statement's "} />
            {content}
            {delDetail && <Modal modalId="my-modal-14" desc={delDetail?.piNumber} description={'Do You Want to Remove That'} item={'PI Number'} functionName={handleDelete} id={delDetail?._id} setDesc={setdelDetail} refetch={refetch}></Modal>}
        </>
    )
};
export default PIList;