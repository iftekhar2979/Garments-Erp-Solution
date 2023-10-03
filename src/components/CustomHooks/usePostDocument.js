import axios from 'axios';
import { useEffect, useState } from 'react';

function usePostApi(url, body) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState({});

  useEffect(() => {

    setIsLoading(true);
    axios.post(url, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        
        setisError({error:error.message});
      })
      setIsLoading(false)


  }, [url, body]);

  return { data, isLoading, isError };
}
export default usePostApi

