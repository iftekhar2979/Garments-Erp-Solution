import axios from "axios";
import { toast } from "react-hot-toast";

const postDocuments =(url,obj)=>{
    axios.post(url,{obj})
    .then(res=>{
        if(res.data){
<<<<<<< HEAD
          return  res.data
        }
       
       return res.data})
    .catch(error=>console.log(error))
=======
            const notify = () => toast('Add post Succesfully');
            notify()
        }
       return res.data})
    .catch(error=>console.log(error.message))
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
}
export default postDocuments