import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyName, addPi, totalQuantityCounting } from '../../../../Redux/Features/pi/piSlice';
import { UidGenarate } from '../Orders/View PO/Reducer/intialState';
import { totalQuantityCalculation } from '../../../../Redux/Features/Size-Calculation-Totals/sizeCalculationSlice';
import { clear } from '@testing-library/user-event/dist/clear';

const ModalTable = ({ detail }) => {
    const [value, setValue] = useState(0)
    const [length, setLength] = useState('')
    const [color,setColor]=useState('')
    const [size,setSize]=useState('')
    const { cleared } = useSelector(state => state.pI)



    const { totalQuantity, productName, companyName, _id,shortForm } = detail
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setValue(parseFloat(e.target.value))
    }
    let count = 0
    const amount = isNaN(totalQuantity * value) ? 0 : (totalQuantity * value)
    console.log(_id)
    // useEffect(()=>{
    //     const object = {
    //         _id,
    //         productName,
    //         length: length,
    //         totalQuantity,
    //         size,
    //         color,
    //         perPics: value,
    //         amount: parseFloat(amount.toFixed(4))
    //     }
    //     dispatch(addPi(object))
    //     dispatch(totalQuantityCounting())
    //     dispatch(addCompanyName({companyName,shortForm}))
    // },[])
    useEffect(() => {
        const object = {

            productName,
            length: length,
            totalQuantity,
            size,
            color,
            perPics: value,
            amount: parseFloat(amount.toFixed(4))
        }
        dispatch(addPi(object))
        dispatch(totalQuantityCounting())
        dispatch(addCompanyName({companyName,shortForm}))
        

    }, [value, length,size,color])

    useEffect(() => {
        if (cleared) {
            setLength('')
        }
    }, [cleared])
    return (
        <>
            <tr className="border bg-gray-50 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <td className='text-md '>{productName}</td>
                <td className='text-md '><input type='text' onChange={(e) => setLength(e.target.value)} className='w-24 border' /></td>
                <td className='text-md '><input type='text' onChange={(e) => setColor(e.target.value)} className='w-24 border' /></td>
                <td className='text-md '><input type='text' onChange={(e) => setSize(e.target.value)} className='w-24 border' /></td>
                <td className='text-md '>{totalQuantity}</td>
                <td className='text-md '>{<input type='number' onChange={(e) => handleChange(e)} className='w-24' />}</td>
                <td className='text-md '>$ {amount.toLocaleString()}</td>
            </tr>


        </>
    )
};
export default ModalTable;