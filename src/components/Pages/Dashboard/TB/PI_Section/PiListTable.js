import react, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useGetDeliveryStatementMutation } from '../../../../../Redux/Features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { deliveryStatementDetails } from '../../../../../Redux/Features/DeliveryStatement/deliveryStatementSlice';
import { AiFillDelete, AiFillEdit, AiOutlineCopy } from "react-icons/ai"

const PiListTable = ({ details, handleRemove }) => {
    const navigate = useNavigate()
    const { piNumber, tbNumbers: selectedValue, companyName, totalAmount, totalQuantity, _id, createdAt } = details

    const dispatch = useDispatch()
    const [getDeliveryStatement, { data: deliveryStatement, isSuccess }] = useGetDeliveryStatementMutation()

    useEffect(() => {

        dispatch(deliveryStatementDetails(deliveryStatement))
        if (deliveryStatement) {
            navigate(`/deliveryStatement/${_id}`)
        }
    }, [deliveryStatement])

    return (
        <>

            <tr className={`border bg-gray-50 border  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                <th className="border font-medium text-gray-900 text-center">
                    {companyName}
                </th>


                <td className="border px-1 text-center">
                    <Link to={`/piStatement/${_id}`} >  <span className="link link-secondary" >{piNumber}</span> </Link>

                </td>
                <td className="border px-1 text-center ">
                    {totalQuantity.toLocaleString()}
                </td>
                <td className="border px-1 text-md text-center font-semibold">
                    <span className='flex justify-between mx-2'>$ <span>{totalAmount.toFixed(2).toLocaleString()}</span></span>

                </td>

                <td className="border  w-32">
                    <span className='flex justify-around'>{createdAt && format(new Date(createdAt), 'PP')}
                        <span>

                            <label htmlFor="my-modal-14" className='inline-block tooltip' data-tip="Delete PI" onClick={() => handleRemove(details)}><AiFillDelete style={{ fontSize: '1.5em', color: 'red', cursor: 'pointer' }}></AiFillDelete></label>
                        </span>
                    </span>
                </td>



            </tr>
        </>
    )
};

export default PiListTable;