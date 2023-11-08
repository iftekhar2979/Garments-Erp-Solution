import axios from 'axios';
import react from 'react';
import { toast } from 'react-hot-toast';
import { deleteWithModal } from '../CustomHooks/Functions.js/deleteRequest';

const Modal = ({modalId,desc,id,functionName,item,description,}) => {

    return (
      <>
{/* <label htmlFor="delete-Modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id={modalId} className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor={modalId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{description} {item} : {desc}</h3>
    
    <div className="modal-action">
     <a onClick={()=>functionName(id)} className="btn">Yes</a>
    </div>
  </div>
</div>
</>
    )
};
export default Modal;