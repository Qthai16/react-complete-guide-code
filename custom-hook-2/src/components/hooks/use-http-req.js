import { useState, useEffect } from "react";

const useHttpReq = (url, method, onSuccess = null, onError = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const requestHandler = async (body) => {
    setIsLoading(true);
    setError(null);
    try {
      let requestInit = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (body !== null) {
        requestInit["body"] = JSON.stringify(body);
      }
      const response = await fetch(url, requestInit);

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
  };

  return [
    { isLoading: isLoading, data: data, error: error },
    (body = null) => {
      requestHandler(body);
    },
  ];
};

export default useHttpReq;
