import axios from 'axios';
import { useEffect, useState } from 'react';
const useQueryFetch = (url,companyName) => {
   const [buyers,setbuyers]=useState(null)
//    const [isLoading,setisLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{

    axios.get(`${url}=${companyName}`)
    .then(responce=>  {
       
       setbuyers(responce.data)}
    ).catch(error=>setError(error)
    )
   },[companyName])
   return {buyers,error,setbuyers}
};

export default useQueryFetch;