import { useState, useCallback } from "react";

const useHttpReq = (requestConfig, onSuccess = null, onError = null) => {
  // url, method
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (body) => {
    setIsLoading(true);
    setError(null);
    try {
      let requestInit = {
        method: requestConfig.method,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (body !== null) {
        requestInit["body"] = JSON.stringify(body);
      }
      console.log(requestInit);
      const response = await fetch(requestConfig.url, requestInit);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      setData(data);
      if (onSuccess !== null) {
        onSuccess(body, data);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    data,
    error,
    sendRequest,
  };
};

export default useHttpReq;
