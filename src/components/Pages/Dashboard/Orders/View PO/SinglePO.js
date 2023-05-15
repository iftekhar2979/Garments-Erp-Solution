import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ViewContext, { ViewContextProvider } from '../../../../contextApi/ViewContext';
import Heading from '../../../../Utility-Component/Heading';
import Table from '../../../../Utility-Component/Table/Table';
import PoTable from './PoTable';
import DetailPOProduct from './DetailPOProduct'
import { intialOrderNumber } from './Reducer/intialState';
import { orderNumberFunction } from './Reducer/reducerFunction';
import { format } from 'date-fns';
import axios from 'axios';
import DetailTable from './DetailTable';
import ColorTable from './ColorTable';
import postDocuments from '../../../../CustomHooks/postDocuments';
import { toast } from 'react-hot-toast';
const tableHeadings = [
  {
    id: 111,
    heading: 'Style',
    class: 'border font-medium text-gray-900 w-24 px-2',
  },
  {
    id: 987,
    heading: 'Details',
  },
];

const SinglePO = () => {
  const poDetail = useLoaderData();
  const [isCheacked, setisCheacked] = useState(false)
  const [chalanNumber,setChalanNumber]=useState(0)
  const [completed, setCompleted] = useState(new Date())
  const [orderState, orderNumberDispatch] = useReducer(orderNumberFunction, intialOrderNumber)
  const { setPoState, grandTotal, context, poState, detailTableContext,lwhHeadingDetailTable,detailContextDispatch, tableDetailHeading, detailTableGrandTotal } = useContext(ViewContextProvider)

  useEffect(() => {

    setPoState(poDetail)
  }, [poDetail, setPoState])

  const { orderNumber, quantityOrder,sizeSystem } = poDetail;
// console.log(sizeSystem)
  const { grandTotalQuantity, grandRestQuantity, grandDeliveryQuantity } = grandTotal

  useEffect(() => {
    orderNumberDispatch({ type: 'COMPLETED_DATE', payload: format(completed, 'PP') })
  }, [completed])
  if (poDetail === {}) {
    return <p className='text-4xl'>LOading...</p>
  }

  const handleSubmit = () => {
    // const {status,adminNote}=orderState
    if (poDetail?.details.length !== 0) {
    
      const obj = { details: detailTableContext, orderId: poDetail?._id, orderNumber: poDetail?.orderNumber, ...detailTableGrandTotal, }
      postDocuments('http://localhost:8000/deliverDetail', obj)
      const newobj = { details: detailTableContext, ...detailTableGrandTotal }
      axios.patch(`http://localhost:8000/addTotalOrder/${poDetail?._id}`, newobj)
        .then(res => {
          const notify = () => toast('order Edited Succesfully');
          notify()
          setisCheacked(false)
          window.location.reload()
        })
        .catch((error=>{
          const notify = () => toast(error.message);
          notify()
        }))

    } else {
      const obj = { details: context, ...grandTotal }
      axios.put(`http://localhost:8000/addTotalOrder/${poDetail?._id}`, obj)
        .then(res => {
          setPoState(res.data)
          const notify = () => toast('order Edited Succesfully');
          notify()
          setisCheacked(false)
          window.location.reload()
          // detailContextDispatch({type:'EMPTY_DETAIL_CONTEXT',payload:[]})
        })
        .catch((error)=>{
          const notify = () => toast(error.message);
          notify()
        })
      }
      
  }

  return (

    <div>
      <Heading heading={`Your Selected orderNumber : ${orderNumber}`}></Heading>
      <DetailPOProduct properties={poDetail} completed={completed} setCompleted={setCompleted} orderNumberDispatch={orderNumberDispatch}></DetailPOProduct>
      
      
      
      {
        poState?.details.length !== 0
          ?
          <>
           <div className='text-center'>
        <Link to={`/dashboard/po/deliveryDetail/${poState?.orderNumber}`} className='link-primary underline'>Delivery Details</Link>
       <h2></h2> 
      </div>
      
          
            <Table tableHeadings={sizeSystem==='L-W-H'?lwhHeadingDetailTable:tableDetailHeading} tableData={[]}>
              {
                poState?.details?.map(item =>
                  <DetailTable isCheacked={isCheacked} setisCheacked={setisCheacked} key={item._id} poDetails={item} />)
              }
              <tr className='h-12 border'>
                <td></td>
                <td></td>
                <td className=''> Ordered Qty: <span className='font-bold'>{poDetail?poDetail?.grandTotalQuantity:detailTableGrandTotal?.grandDeliveryQuantity}</span></td>
                <td className=''> Delivery Qty: <span className='font-bold'>{detailTableGrandTotal?.grandDeliveryQuantity}</span></td>
                <td className=''>Rest Qty:  <span className='font-bold'>{detailTableGrandTotal?.grandRestQuantity}</span></td>
                <td className='ml-6'><button className=' btn btn-primary btn-sm ' onClick={() => setisCheacked(!isCheacked)}>{isCheacked ? "Cancel Total" : 'Total'}</button> </td>
              </tr>

            </Table>
          </>
          :
          <>
            <Table tableHeadings={tableHeadings} tableData={[]}>

              {quantityOrder?.map((item, index) => (
                <PoTable
                  style={item}
                  key={index}
                  setisCheacked={setisCheacked}
                  isCheacked={isCheacked}

                />
              ))}
              <tr>
                <td></td>
                <td>
                  <table className='flex justify-between'>
                    <tr className=''>
                    </tr>
                    <tr className=''>
                      <td className=''>Order Qty: <span className='font-bold'>{grandTotalQuantity}</span></td>
                    </tr>
                    <tr className=''>
                      <td className=''> Delivery Qty: <span className='font-bold'>{grandDeliveryQuantity}</span></td>
                    </tr>
                    <tr className=''>
                      <td className='absolute right-60'>Rest Qty:  <span className='font-bold'>{grandRestQuantity}</span></td>
                    </tr>
                    <tr className=''>
                      <td><button className='btn btn-primary btn-sm ' onClick={() => setisCheacked(!isCheacked)}>{isCheacked ? "Cancel Total" : 'Total'}</button> </td>
                    </tr>
                    <tr>
                    </tr>
                  </table>
                </td>

              </tr>
            </Table>
          </>
      }

      <div className='flex justify-center'>
        <button className='btn btn-primary' disabled={!isCheacked ? true : false} onClick={handleSubmit}>Submit</button>
      </div>

    </div>

  );
};

export default SinglePO;
