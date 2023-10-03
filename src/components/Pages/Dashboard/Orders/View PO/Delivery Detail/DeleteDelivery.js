import react from 'react';

const DeleteDelivery = ({handleDel,data}) => {
    return (
        <>
        <td><label htmlFor="my-modal-5" className='btn btn-sm' onClick={()=>handleDel(data)}>Delete Chalan</label></td>
        </>
    )
};
export default DeleteDelivery;