import { useEffect, useState } from 'react';

function usePostApi(url, body) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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