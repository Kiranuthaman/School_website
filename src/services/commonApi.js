// src/services/commonApi.js
import axios from 'axios';

export const commonApi = async (httpRequest, url, reqBody) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const result = await axios(reqConfig);
    return result; // Return the full response object
  } catch (err) {
    return err; // In case of error, return the error object
  }
};
