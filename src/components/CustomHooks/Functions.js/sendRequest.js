import axios from "axios";

export const sendRequest = async (url,obj) => {
    const res = await axios
      .post(url, obj)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };