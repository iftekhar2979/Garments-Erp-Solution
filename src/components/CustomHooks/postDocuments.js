import axios from "axios";
import { toast } from "react-hot-toast";

const postDocuments =(url,obj)=>{
    axios.post(url,{obj},{withCredentials:true})
    .then(res=>{
        if(res.data){
          return  res.data
        }
       
       return res.data})
    .catch(error=>console.log(error))
}
export default postDocuments