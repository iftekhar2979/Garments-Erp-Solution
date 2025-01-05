import axios from 'axios';
import { useEffect, useState } from 'react';
const useFetch = (url) => {
   const [companyData,setcompanyData]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)

    axios.get(url)
    .then(responce=>  {
<<<<<<< HEAD
=======
        
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
       setcompanyData(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
   },[url])
   return {companyData,loading,error,setcompanyData}
};

export default useFetch;