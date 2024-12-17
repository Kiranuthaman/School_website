// src/services/allApi.js
import { commonApi } from './commonApi';
import { serverUrl } from './serverURL';

// Fetching the student data
export const getStudentApi = async () => {
  const response = await commonApi('GET', `${serverUrl}/students`, '');
  console.log('API response:', response);
  return response; // Return the response for further handling
};

// Submitting assignment data
export const submitAssignmentsApi = async (assignments) => {
  const response = await commonApi('POST', `${serverUrl}/api/assign-class`, assignments);
  console.log('Assignment submission response:', response);
  return response; // Return the response for further handling
};
