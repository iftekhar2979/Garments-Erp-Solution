import { useQuery } from 'react-query';

const useCustomQuery = (url) => {
  const fetchServerData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  return useQuery('serverData', fetchServerData);
};

export default useCustomQuery;