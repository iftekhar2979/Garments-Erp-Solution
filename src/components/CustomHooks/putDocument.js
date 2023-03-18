import axios from "axios";
import { toast } from "react-hot-toast";

const putDocuments =(url,object,id)=>{
    axios.put(`${url}/${id}`,{object})
    .then(res=>{
        if(res.data){
            const notify = () => toast('Edit product Succesfully');
            notify()
        }
       return res.data})
    .catch(error=>console.log(error.message))
}
export default putDocuments