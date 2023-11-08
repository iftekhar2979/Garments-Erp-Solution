import react from 'react';
import { useGetDeliveryStatementMutation } from '../../../../../Redux/Features/api/apiSlice';
import { useSelector } from 'react-redux';

const DeliveryStatement = (props) => {
    const {deliveryStatement={}}=useSelector(state=>state.deliveryStatement)
    console.log(deliveryStatement)
  
    return (
        <>
        <div contentEditable='true'>This is a delivery Statement</div>
        </>
    )
};
export default DeliveryStatement;