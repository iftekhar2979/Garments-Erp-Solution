import react, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { UidGenarate } from '../Reducer/intialState';
import Table from '../../../../../Utility-Component/Table/Table';
import ToogleTable from '../../../../../Utility-Component/Table/ToogleTable';
import useDocumentTitle from '../../../../../CustomHooks/useDocumentTitle';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Modal from '../../../../../Utility-Component/Modal';
import DeleteDelivery from './DeleteDelivery';
import { useQuery } from 'react-query';
import { useDeleteDeliveryMutation, useDeletingDeliveryMutation, usePatchOlderDataFromDeliveryWhenDeleteMutation } from '../../../../../../Redux/Features/api/apiSlice';
import { decreaseChalanNumber } from '../../../../../CustomHooks/Functions.js/increaseDecreaseChalanNumber';
import { format } from 'date-fns';
import Heading from '../../../../../Utility-Component/Heading';


const tableHeadings = [
    {
        id: UidGenarate(),
        heading: 'STYLE'
    },
    {
        id: UidGenarate(),
        heading: 'COLOR'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERY DETAILS'
    }, {
        id: UidGenarate(),
        heading: 'REST DETAILS'
    }
]
const lwhTableHeading = [
    {
        id: UidGenarate(),
        heading: 'STYLE'
    },
    {
        id: UidGenarate(),
        heading: 'SIZE'
    },
    {
        id: UidGenarate(),
        heading: 'DELIVERY DETAILS'
    }, {
        id: UidGenarate(),
        heading: 'REST DETAILS'
    }
]
const DeliveryDetail = () => {
    const data = useLoaderData()
    const [deleteDelivery,{isSuccess:deletedSuccess}]=useDeleteDeliveryMutation()
    const [patchOlderDataFromDeliveryWhenDelete,]=usePatchOlderDataFromDeliveryWhenDeleteMutation()
    const [deletingDelivery]=useDeletingDeliveryMutation()
    const params=useParams()
    const navigate=useNavigate()
    const [currentIndex, setCurrentIndex] = useState(null);
    const [size_system, set_size_system] = useState();
    const [delDetail,setDelDetail]=useState('')
useDocumentTitle('Delivery Details')

    useEffect(()=>{
        if(data.length>0){
            setCurrentIndex(0)
        }
    },[data])
    const handleToggleClick = (id) => {
        setCurrentIndex(id)
    }
  
    const handleDel=(data)=>{
        setDelDetail(data)

    }
    const handleDelete=()=>{
        const {_id,orderId}=delDetail
        deletingDelivery({_id, orderId})
        .then(res=>{
            if(res.data.isUpdated){
                setDelDetail('');
                   const notifySuccess = () => toast.success('Deleted Successfully');
                notifySuccess();
                    navigate(-1);
            }
        }).catch(err=>{
            if(err){
                const notifySuccess = () => toast.error('Server side Error, Please Reload!!!');
             notifySuccess();
            }
        })
       
            // const [updateResponse, deleteResponse] = await Promise.all([updatePromise, deletePromise]);
        //     patchOlderDataFromDeliveryWhenDelete({_id, orderId})
        //     .then(res=>{
        //         if(res.data.isUpdated){
        //             deleteDelivery(_id)
        //             .then(res=>{
        //                 if(res.data.isDeleted){
        //                     setDelDetail('');
        //                       const notifySuccess = () => toast.success('Deleted Successfully');
        //                       notifySuccess();
        //                       navigate(-1);
        //                 }
        //             }).catch(error=>{
        //                 if(error){
        //                 const notifySuccess = () => toast.error('Deleting Error');
        //                       notifySuccess();
        //                 }
        //             })

        //         }
        //     }).catch(error=>{
        //         if(error){
        //             const notifySuccess = () => toast.error('Editing Order Error');
        //             notifySuccess();
        //         }
        //     })
        
           
        //   } catch (error) {
        //     // Handle errors from API requests
        //     const notify = () => toast.error(error.message);
        //     notify();
        //   }
    }
   
    // console.log(data[currentIndex]?._id)
    return (
        <>
        <div>
            <Heading heading={"Total Delivered Quantity And Details"}></Heading>
            {/* <h1 className='text-3xl text-center '>Total Delivered Quantity Details</h1> */}
             {data.length!==0? data?.map((item, index) => <button key={item._id} onClick={() => handleToggleClick(index)} className={`btn  ml-3 my-3 ${currentIndex === index ? 'btn-primary ' : 'text-white bg-gray-300 rounded focus:outline-none'}`}> {format(new Date(item.createdAt),'PP' ) }</button>):""} 
            {currentIndex!==null ? (
                <Table tableHeadings={size_system === 'L-W-H' ? lwhTableHeading : tableHeadings} tableData={[]} >

                    {
                        data[currentIndex].details?.map(item => <ToogleTable key={item._id} size_system={size_system} data={item}></ToogleTable>)
                    }
                    <tr className='h-12 border'>
                        <td></td>
                        <DeleteDelivery handleDel={handleDel} data={data[currentIndex]}/>
                        <td className=''> Delivery Quantity: <span className='font-bold'>{data[currentIndex].grandDeliveryQuantity}</span></td>
                        <td ><Link to={`/chalan/${data[currentIndex]?._id}`}><button className='btn btn-secondary btn-sm' >Make Chalan</button></Link></td>
                    </tr>
                </Table>

            ):<p className='text-4xl text-center my-4 text-red-600'>NO DELIVERY ADDED <span className='link link-primary' onClick={()=>navigate(-1)}>Add Delivery</span></p>}  
        </div>
         {delDetail && <Modal modalId={'my-modal-5'} item={'Delivery'} desc={delDetail?.chalanNumber} description={"Do you want to delete Chalan"}  functionName={handleDelete} setDesc={setDelDetail}/>}
         </>
    )
};
export default DeliveryDetail;