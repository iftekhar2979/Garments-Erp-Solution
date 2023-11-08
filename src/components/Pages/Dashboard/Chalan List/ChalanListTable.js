import react from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ChalanListTable = ({detail}) => {
    const {companyName='',buyerName='',productName='',grandDeliveryQuantity,chalanNumber,createdAt,_id}=detail
    return (
        <>
        
            <tr className={`border bg-gray-50 border  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                <th className="border font-medium text-gray-900 w-20 ">
                {companyName}
                </th>
                <td className=" border px-1 w-10">
                    {buyerName}
                </td>
                <td className="border px-1 w-14">
                {productName}
              
                </td>
                <td className="border px-1 w-16">
                <Link to={`/chalan/${_id}`} >  <span className="link link-secondary font-bold text-lg" >{chalanNumber}</span> </Link>
                </td>
                <td className="border  w-16 font-bold">
                {grandDeliveryQuantity.toLocaleString()}
                </td>

                
                <td className="border  w-14">
                    {createdAt && format(new Date(createdAt),'PP' )}
                </td>
                
             
                
            </tr>
         
        
        </>
    )
};

export default ChalanListTable;