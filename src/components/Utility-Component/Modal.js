import axios from 'axios';
import react from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({modalId,desc,setDesc,refetch}) => {
  // console.log('des',desc)
  const {orderNumber,_id}=desc
  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/orderList?id=${_id}`)
    .then(res=>{
      refetch()
      if(res.data.isDeleted){
        const notify = () => toast('Deleted Succesfully');
            notify()
      }
      setDesc('')
    })
  }
    return (
      <>
{/* <label htmlFor="delete-Modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id={modalId} className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Do you Want to Remove Order Number : {desc?.orderNumber}</h3>
    
    <div className="modal-action">
     <a onClick={()=>handleDelete(_id)} className="btn">Yes</a>
    </div>
  </div>
</div>
</>
    )
};
export default Modal;