import react, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import TBList from './TBList';
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { findingTbArray } from '../../../../Redux/Features/UiBehavior/uiSlice';
import PiOption from './PiOption';

const TBTable = ({ piNumbers, selectedValues, handleCheckboxChange, handlePi, matchedCompany }) => {
    const { tbNumber, completed, companyName, piNumber = '', tbArray=[], } = piNumbers
  
    const [same, setSame] = useState(false)
    const [openModal, setOpenModal] = useState(false)

 
    useEffect(() => {

        if (!matchedCompany) {
            setSame(false)
        }
        if (matchedCompany) {
            if (matchedCompany !== companyName) {
                setSame(true)
            }

        }
    }, [matchedCompany, selectedValues])
    let content
    if (!completed) {
        content = <input type='checkbox' disabled={same} className={` checkbox checkbox-md checkbox-success mx-2`} value={tbNumber} checked={selectedValues.includes(tbNumber)} onChange={handleCheckboxChange} />
    }


    if (completed) {
        content = <TiTick size={25} />
    }
    // console.log(selectedValues)
    const handleModal = () => {
        if (piNumber) {
            setOpenModal(!openModal)
        }
    }
   
    return (
        <>

            <tr className={`border bg-gray-50 border text-cyan-950 hover:bg-green-400 dark:bg-gray-800 dark:border-gray-700 ${completed && 'bg-cyan-500 text-cyan-950 hover:bg-cyan-500'} ${selectedValues.includes(tbNumber) && 'bg-green-400'}`}>
                <th className='w-6'>
                    {/* <input type='checkbox' className='w-8' value={tbNumber} checked={selectedValues.includes(tbNumber)} onChange={handleCheckboxChange} /> */}
                    {content}
                </th>
                <td className='text-md link'>{tbNumber}</td>
                <td className='text-md link flex' onClick={handleModal} >{piNumber}
                    {/* {openModal && <PiOption tbArray={tbArray} piNumber={piNumber}/>} */}

                </td>
                <td className='text-md link'>{companyName}</td>
                {selectedValues.includes(tbNumber) && <><label className='btn btn-secondary btn-sm my-2' htmlFor="my-modal-6" onClick={handlePi}>MAKE PI</label></>}

            </tr>
        </>
    )
};
export default TBTable;