import axios from "axios";
import { toast } from "react-hot-toast";

const postDocuments =(url,obj)=>{
    axios.post(url,{obj})
    .then(res=>{
        if(res.data){
            const notify = () => toast('Add post Succesfully');
            notify()
        }
       return res.data})
    .catch(error=>console.log(error.message))
}
export default postDocuments