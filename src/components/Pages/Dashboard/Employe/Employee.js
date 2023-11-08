import react, { useState } from 'react';
import PropTypes from 'prop-types';
import MoreInput from '../../../Utility-Component/MoreInput';
import UseCollectArray from '../../../CustomHooks/UseCollectArray';
import { useAddDeliveryManMutation, useGetDeliveryManQuery } from '../../../../Redux/Features/api/apiSlice';
import toast from 'react-hot-toast';
import { isError } from 'react-query';
import Spinner from '../../../Utility-Component/Spinner';

const Employee = (props) => {
    const {data:deliveryMens,isLoading}=useGetDeliveryManQuery()
    const [addDeliveryMan, { isSuccess: deliveryManSuccess, isLoading: deliveryManLoading,isError ,refetch}] = useAddDeliveryManMutation()
    const { handleAdd, handleChange, handleRemove, val, setVal } =
        UseCollectArray();

    const handleADD = async () => {
        // console.log(val)
        addDeliveryMan(val).then(res=>{
            if(res.data){
                const notify = toast.success('Added Succesfully')
                notify()
            }
        })
        refetch()


    }
    let content
    if(isLoading){
        content=<Spinner/> 
    }
    
    if(isError) return "Something Error"
 if( !isLoading&&!isError&& deliveryMens.deliveryMan){
content=  <ul className='text-center'>
{deliveryMens?.deliveryMan.length!==0 && deliveryMens?.deliveryMan?.map(item=><li className='border-t border-b'>{item}</li>)}
</ul>
 }
    return (
        <section className='flex justify-center items-center flex-col my-4'>
            <div className='w-1/2  py-4 border bg-white  '>
                <MoreInput
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    handleRemove={handleRemove}
                    val={val}
                    setVal={setVal}
                    placeholder={'Add Delivery Man..'}
                // component={'Products'}
                />
                <div className='flex justify-center py-2'>
                    <button className='btn btn-primary' onClick={handleADD}>
                        {deliveryManLoading ? 'Adding...' : 'Add Delivery Man'}
                    </button>
                </div>
            </div>
            <div className='w-1/2  my-4 py-4 border bg-white  '>
              {content}
            </div>
        </section>

    )
};

export default Employee;