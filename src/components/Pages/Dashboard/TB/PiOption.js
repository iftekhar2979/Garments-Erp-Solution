import react, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { findingTbArray } from '../../../../Redux/Features/UiBehavior/uiSlice';
import { Link } from 'react-router-dom';

const PiOption = ({tbArray,piNumber,_id}) => {
    const dispatch = useDispatch()
  
    const handleDeliveryStatement = () => {
  
        dispatch(findingTbArray(tbArray))
    }
    return (
        <>
     {piNumber ?   
        <div className='bg-gray-200 p-4'>
           <Link to={`/dashboard/tbLists/piStatement`}> <p className='link-secondary link'>PI Statement <AiOutlineArrowRight size={25} /></p></Link>
            <Link to={`/deliveryStatement/${piNumber}`}><p className='link link-secondary' onClick={handleDeliveryStatement}>Delivery Statement <AiOutlineArrowRight size={25} /></p></Link>
        </div> 
       : ''}
        </>
    )
};
export default PiOption;