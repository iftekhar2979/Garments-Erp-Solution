import axios from "axios";
import { toast } from "react-hot-toast";

<<<<<<< HEAD
const patchDocuments =(url,object,id)=>{
    console.log(`${url}/${id}`)
    axios.patch(`${url}/${id}`,{object},{withCredentials:true})
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
=======
const putDocuments =(url,object,id)=>{
    axios.put(`${url}/${id}`,{object})
    .then(res=>{
        if(res.data){
            console.log(res.data)
            const notify = () => toast('Edit product Succesfully');
            notify()
        }
       return res.data})
    .catch(error=>console.log(error.message))
}
export default putDocuments
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
