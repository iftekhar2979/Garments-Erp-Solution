import react from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { lastClickedRoute } from '../../../../Redux/Features/orderListFilter/orderListFilter';
import { useDispatch, useSelector } from 'react-redux';

const ChalanListTable = ({detail}) => {
    const {chalanFiltering:{lastClicked}}=useSelector(state=>state.orderListFilter)
    const dispatch=useDispatch()
    const {companyName='',buyerName='',productName='',grandDeliveryQuantity,orderNumber,chalanNumber,createdAt,_id}=detail
    const handleLastRoute=()=>{
        dispatch(lastClickedRoute({filterName:'chalanFiltering',value:chalanNumber}))
       }
      
    let lastClickedClass=()=>{
        return (lastClicked===chalanNumber)?'link link-success font-bold text-lg':`link link-secondary font-bold text-lg`
    
    }
    let dates=new Date(createdAt)
    let time=dates.toLocaleTimeString()
    return (
        <>
        
            <tr className={`border bg-gray-50 border  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                <th className="border font-medium text-gray-900 w-20 ">
                {companyName}
                </th>
                <td className=" border px-1 w-10">
                    {buyerName}
                </td>
                <td className=" border px-1 w-10">
                    {orderNumber}
                </td>
                <td className="border px-1 w-14">
                {productName}
                </td>
                <td className="border px-1 w-16">
                <Link to={`/chalan/${_id}`} >  <span className={lastClickedClass()} onClick={handleLastRoute} >{chalanNumber}</span> </Link>
                </td>
                <td className="border  w-16 font-bold">
                {grandDeliveryQuantity.toLocaleString()}
                </td>

                
                <td className="border  w-14">
                <span className='text-blue-500 font-semibold'>    {createdAt && format(dates,'PP' )}</span>
                    <br/>
                    <span className='text-green-700 font-semibold'>{time}</span>
                </td>
                
             
                
            </tr>
         
        
        </>
    )
};

export default ChalanListTable;