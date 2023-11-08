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
const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'Company',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'PI Number',
        class: 'px-1'

    }, {
        id: UidGenarate(),
        heading: 'Total Quantity',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Total Amount',
        class: 'px-1'

    },
    {
        id: UidGenarate(),
        heading: 'Created At',
        class: 'px-1'

    },

]

const PIList = (props) => {
    const {data:piList=[],isLoading ,isError,refetch}=useGetCreatedPIListsQuery(undefined,{
        refetchOnMountOrArgChange:true
    })
    const [delDetail,setdelDetail]=useState({})
    if(isLoading){
        return <Spinner/>
    }
    const handleRemove = (id) => {
        setdelDetail(id)
    }
    const handleDelete=(id)=>{
        deleteWithModal('http://localhost:8000/deletePi?id', id, setdelDetail, refetch)
    }
    let content
    if (!isLoading && !isError) {
        content =
            <>
                <Table tableHeadings={tableHeadings} tableData={[]}>
                    {Array.isArray(piList) && piList?.map(item => <PiListTable key={UidGenarate()} handleRemove={handleRemove} details={item}/>)}
                </Table>
                {/* <Pagination count={count} page={page} handlePage={handlePage} /> */}
            </>
    }
    if(isError){
content='Something Wrong In Server !!!'
    }
  
   
    return (
        <div>
        <Heading heading={"PI list and Delivery Statement"} />
        {content}
        {delDetail && <Modal modalId="my-modal-14" desc={delDetail?.piNumber} description={'Do You Want to Remove That'} item={'PI Number'} functionName={handleDelete} id={delDetail?._id} setDesc={setdelDetail} refetch={refetch}></Modal>}
        </div>
    )
};
export default PIList;