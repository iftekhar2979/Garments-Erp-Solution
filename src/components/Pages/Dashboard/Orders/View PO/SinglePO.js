import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import Heading from '../../../../Utility-Component/Heading';
import Table from '../../../../Utility-Component/Table/Table';
import PoTable from './PoTable';
import DetailPOProduct from './DetailPOProduct'
import { intialOrderNumber } from './Reducer/intialState';
import { orderNumberFunction } from './Reducer/reducerFunction';
import { format } from 'date-fns';
import axios from 'axios';
import DetailTable from './DetailTable';
import { toast } from 'react-hot-toast';
import { increaseChalanNumber } from '../../../../CustomHooks/Functions.js/increaseDecreaseChalanNumber';
import Spinner from '../../../../Utility-Component/Spinner';
import { fetchSingleOrder } from '../../../../../Redux/Features/Single-Order/singleOrder';
import { useDispatch, useSelector } from 'react-redux';
import singleOrder from '../../../../../Redux/Features/Single-Order/singleOrder';
import { clearingState } from '../../../../../Redux/Features/Order_Details/orderDetails';
import { useAddDeliveryMutation, useAddDetailsAndPatchInSingleOrderMutation, useAddDetailsAndPatchInSingleOrderQuery, useAddDetailsInSingleOrderMutation, useGetSingleOrderQuery, usePatchInSingleOrderMutation } from '../../../../../Redux/Features/api/apiSlice';
import { clearingDeliveryState } from '../../../../../Redux/Features/DELIVERY_TABLE/deliverytable';
import { useAddDeliveryAndUpdateOrdersMutation } from '../../../../../Redux/Features/api/apiSlice';

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
  const { id } = useParams()
  const [edit,setEdit]=useState(false)
  const details = useSelector(state => state.orderDetails)
  const { grandDeliveryQuantity, grandRestQuantity, details: detail } = useSelector(state => state?.deliveryTable)
  const [addDeliveryAndUpdateOrders,{isLoading:addDeliveryLoading}]=useAddDeliveryAndUpdateOrdersMutation()
  const [addDetailsInSingleOrder, { isSuccess, isError: addingError, error: deliveryErrorDetails, isLoading: AddingDetailsLoading }] = useAddDetailsInSingleOrderMutation()
  const [addDelivery, { isSuccess: deliverySuccess, isError: deliveryError, error: addingDeliveryError, isLoading: addingDeliveryLoading }] = useAddDeliveryMutation()
  const [addDetailsAndPatchInSingleOrder, { isSuccess: patchedDetailSuccess, isError: editingError, isLoading: patchingOrderLoading }] = usePatchInSingleOrderMutation()
  const dispatch = useDispatch()
  const [isCheacked, setisCheacked] = useState(false)
  const [completed, setCompleted] = useState(new Date())
  const { isLoading, isError, data: singleOrderDetails = {} } = useGetSingleOrderQuery(id, {
    refetchOnMountOrArgChange: true
  })
  // 
  const [delivered, setDelivered] = useState(false)
  const [orderState, orderNumberDispatch] = useReducer(orderNumberFunction, intialOrderNumber)


  const { action, poState, setPoState, lwhHeadingDetailTable, tableDetailHeading, detailTableGrandTotal } = useContext(ViewContextProvider)
  useEffect(() => {
    if (Object.values(singleOrderDetails).length !== 0) {
      setPoState(singleOrderDetails)
    }

  }, [id, singleOrderDetails])
  // console.log(poState)


  const { orderNumber, productName, quantityOrder, sizeSystem, _id, details: detailOfOrder, tbNumber, grandTotalQuantity: totalQuantities } = singleOrderDetails;

  useEffect(() => {
    return () => {
      dispatch(clearingState())
      dispatch(clearingDeliveryState())
    }
  }, [])

  useEffect(() => {
    orderNumberDispatch({ type: 'COMPLETED_DATE', payload: format(completed, 'PP') })
    if (action) {
      const douc = document.querySelectorAll(`.border.w-32.false`)
      douc.forEach(item => item.value = '')
    }

  }, [completed, action])

  if (isLoading) {
    return <Spinner />

  }

  const handleSubmit = () => {
    if (detailOfOrder.length !== 0) {
      // post delivery details
      let filteredDetails = detail?.filter(item => item.deliveryQuantity !== 0)

      const deliveryDetails = {
        details: filteredDetails,
        orderId: _id,
        orderNumber,
        tbNumber,
        grandDeliveryQuantity,
        grandRestQuantity,
        productName //productName for delivery it is related with delivery statement
      }
      let patchedOrderInfo = {
        details: detail,
        grandDeliveryQuantity,
        grandRestQuantity,
      }
   
      if (grandDeliveryQuantity > 0) {
        addDeliveryAndUpdateOrders({id:_id,deliveryDetails,patchedOrderInfo})
           .then(res => {
             if (res.data?.isUpdated) {
              const notify = () => toast('LOADING...')
              notify()
              dispatch(clearingState())
            }
          }).catch(error => {
            if (error) {
              
              const notify = () => toast.error('Something Error in Server')
              notify()
            }
          })

      }
    } else {
     
      addDetailsInSingleOrder({ details, _id })
      const notify = () => toast('LOADING...')
              notify()
    }
  }
  let errorContent
  if (deliveryErrorDetails || addingDeliveryError || deliveryError) {
    console.log('error')
    errorContent = <h1 className='bg-red-300 text-2xl '>Something Error IN Server Please Reload The Page And Try Again!!!</h1>
  }

  return (
    <div>
      <Heading heading={`Your Selected Order Number : ${orderNumber}`}></Heading>
      <DetailPOProduct properties={singleOrderDetails} completed={completed} setCompleted={setCompleted} orderNumberDispatch={orderNumberDispatch}></DetailPOProduct>
      {
        singleOrderDetails && singleOrderDetails.details && singleOrderDetails?.details.length !== 0
          ?
          <>
            <div className='text-center'>
              <Link to={`/dashboard/po/deliveryDetail/${poState?._id}`} className='link-primary underline'>Delivery Details</Link>
              <h2></h2>
            </div>
            <Table tableHeadings={sizeSystem === 'L-W-H' ? lwhHeadingDetailTable : tableDetailHeading} tableData={[]}>
              {
                singleOrderDetails?.details?.map(item =>
                  <DetailTable isCheacked={isCheacked} setisCheacked={setisCheacked} key={item._id} poDetails={item} />)
              }
              <tr className='h-12 '>
                <td></td>
                <td></td>
                <td className=''> Ordered Qty: <span className='font-bold'>{totalQuantities}</span></td>
                <td className=''> Delivery Qty: <span className='font-bold'>{grandDeliveryQuantity}</span></td>
                <td className=''>Rest Qty:  <span className='font-bold'>{grandRestQuantity}</span></td>
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
                edit={edit}
                />
              ))}

            </Table>
          </>
      }
      {errorContent}

      <div className='flex justify-center'>
        <button className={`btn  ${( addDeliveryLoading) ? "btn-disabled" : " btn-primary"}`} disabled={addDeliveryLoading} onClick={handleSubmit}>{(addDeliveryLoading) ? "Adding delivery..." : "Submit"}</button>
      </div>

    </div>

  );
};

export default SinglePO;
