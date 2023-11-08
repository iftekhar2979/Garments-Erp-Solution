import react, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useGetDeliveryStatementMutation } from '../../../../../Redux/Features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { deliveryStatementDetails } from '../../../../../Redux/Features/DeliveryStatement/deliveryStatementSlice';
import { AiFillDelete, AiFillEdit,AiOutlineCopy } from "react-icons/ai"

const PiListTable = ({details,handleRemove}) => {
    const navigate=useNavigate()
    const {piNumber,tbNumbers:selectedValue,companyName,totalAmount,totalQuantity,_id,createdAt}=details
    
    const dispatch=useDispatch()
    const [getDeliveryStatement, { data: deliveryStatement, isSuccess }] = useGetDeliveryStatementMutation()
    
    useEffect(()=>{
        
        dispatch(deliveryStatementDetails(deliveryStatement))
        if(deliveryStatement){
            navigate(`/deliveryStatement/${_id}`)
        }
    },[deliveryStatement])
    const handleDeliveryStatement=()=>{
        getDeliveryStatement(selectedValue)
        // console.log(history)
    }
    return (
        <>
        
        <tr className={`border bg-gray-50 border  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
            <th className="border font-medium text-gray-900 ">
            {companyName}
            </th>
   
          
            <td className="border px-1 ">
            <Link to={`/piStatement/${_id}`} >  <span className="link link-secondary" >{piNumber}</span> </Link>
                <span className='mx-4 ' onClick={handleDeliveryStatement}>Delivery Statement</span>
            </td>
            <td className="border  ">
            {totalQuantity}
            </td>
            <td className="border px-1 text-md">
            {totalAmount.toLocaleString()}
          
            </td>
            
             <td className="border  ">
                {createdAt && format(new Date(createdAt),'PP' )}
                <label htmlFor="my-modal-14" className='inline-block tooltip' data-tip="Delete PI" onClick={() => handleRemove(details)}><AiFillDelete style={{ fontSize: '1.5em', color: 'red', cursor: 'pointer' }}></AiFillDelete></label>
            </td> 
            
         
            
        </tr>
    </>
    )
};

export default PiListTable;