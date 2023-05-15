import axios from 'axios';
import { useEffect, useState } from 'react';

function usePostApi(url, body) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(null);

  useEffect(() => {

    setIsLoading(true);
    axios.post('http://localhost:8000/addOrder', body)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setisError(error.response.data.error);
      })
      setIsLoading(false)


  }, [url, body]);

  return { data, isLoading, isError };
}
export default usePostApi

