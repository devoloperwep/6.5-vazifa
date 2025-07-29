import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await axios(url);
        if (req.status !== 200) throw new Error(req.statusText);
        setData(req.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, isPanding, error };
};
