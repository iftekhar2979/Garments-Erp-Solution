import axios from 'axios';
import { useEffect, useState } from 'react';
const useProductItem = () => {
   const [product,setproduct]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)

    axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/products/64161bb6a541e87d78c95b47`)
    .then(responce=>  {
        
       setproduct(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
   },[`${process.env.REACT_APP_DEVELOPMENT_URL}/products/64161bb6a541e87d78c95b47`])
   return {product,loading,error,setproduct}
};

export default useProductItem;