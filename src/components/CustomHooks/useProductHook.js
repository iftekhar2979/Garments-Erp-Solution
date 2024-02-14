import axios from 'axios';
import { useEffect, useState } from 'react';
const useProductItem = () => {
   const [product,setproduct]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)

<<<<<<< HEAD
    axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/products/64161bb6a541e87d78c95b47`,{withCredentials:true})
=======
    axios.get(`http://localhost:8000/products/64161bb6a541e87d78c95b47`)
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    .then(responce=>  {
        
       setproduct(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
<<<<<<< HEAD
   },[`${process.env.REACT_APP_DEVELOPMENT_URL}/products/64161bb6a541e87d78c95b47`])
=======
   },[`http://localhost:8000/products/64161bb6a541e87d78c95b47`])
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
   return {product,loading,error,setproduct}
};

export default useProductItem;