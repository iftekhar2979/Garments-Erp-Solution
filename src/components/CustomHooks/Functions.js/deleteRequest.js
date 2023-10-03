import axios from "axios";
import { toast } from "react-hot-toast";

export const deleteWithModal=(url,id,func,refetch)=>{
    axios.delete(`${url}=${id}`)
    .then(res=>{
      refetch()
      if(res.data.isDeleted){
        const notify = () => toast('Deleted Succesfully');
            notify()
      }
     func('')
    })
}

