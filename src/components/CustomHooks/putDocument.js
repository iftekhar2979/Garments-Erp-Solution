import axios from "axios";
import { toast } from "react-hot-toast";

const patchDocuments =(url,object,id)=>{
    axios.patch(`${url}/${id}`,{object})
    .then(res=>{
        if(res.data){
            const notify = () => toast('Edit product Succesfully');
            notify()
        }
       return res.data
    })
    .catch(error=>console.log(error.message))
}
export default patchDocuments