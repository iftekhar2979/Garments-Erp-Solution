import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearingState } from '../../../../Redux/Features/pi/piSlice';
import axios from 'axios';
import { useAddPIMutation, useGetPiListQuery } from '../../../../Redux/Features/api/apiSlice';
import { increaseChalanNumber } from '../../../CustomHooks/Functions.js/increaseDecreaseChalanNumber';

const SubmitButton = ({setSelectedValues,deliveryStatement}) => {
    const piState = useSelector(state => state.pI) 
    const {refetch}=useGetPiListQuery()
    const [addPi]=useAddPIMutation()
    const dispatch=useDispatch()
    
    // console.log(deliveryStatement)
    const handleSubmit=()=>{
        // console.log(piState)
        addPi(piState)
        
       
        // increaseChalanNumber('6513dcf48ca7563803be1913')
        dispatch(clearingState())
        setSelectedValues('')
        refetch().then(res=>{

            const modalCheckbox = document.getElementById('my-modal-6');
            if (modalCheckbox) {
                modalCheckbox.checked = false;
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <a htmlFor='my-modal-6' className="btn btn-sm btn-secondary" onClick={handleSubmit}>Submit</a>
    )
};
export default SubmitButton;