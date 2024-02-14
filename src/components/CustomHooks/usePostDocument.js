<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
import { useEffect, useState } from 'react';

function usePostApi(url, body) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
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

=======
  const [isError, setisError] = useState(null);

  useEffect(() => {
    const postApi = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setisError(error);
      } finally {
        setIsLoading(false);
      }
    };

    postApi();
  }, [url,body]);

  return { data, isLoading, isError };
}
export default usePostApi
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
