import react from 'react';
import { useSelector } from 'react-redux';

const TotalTableOfPI = () => {
    const {totalAmount=0,totalQuantity=0}=useSelector(state=>state.pI)
    return (
        <>
        <tr key="">
                <td className='text-md font-bold '>Total</td>
                <td className='text-md '></td>
                <td className='text-md '></td>
                <td className='text-md '></td>
                <td className='text-md font-bold'>{totalQuantity.toLocaleString()}</td>
                <td className='text-md '></td>
                <td className='text-md font-bold'>$ {totalAmount.toLocaleString()}</td>
            </tr>
        </>
    )
};
export default TotalTableOfPI;