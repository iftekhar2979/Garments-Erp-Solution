import axios from 'axios';
import { useEffect, useState } from 'react';
const useFetch = (url) => {
   const [companyData,setcompanyData]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)

    axios.get(url,{withCredentials:true})
    .then(responce=>  {
       setcompanyData(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
   },[url])
   return {companyData,loading,error,setcompanyData}
};

export default useFetch;