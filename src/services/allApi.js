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
/**
 * Add a new student
 * @param {Object} studentData - The student data to be added
 */
export const addStudentApi = async (studentData) => {
  try {
    const response = await commonApi('POST', `${serverUrl}/students`, studentData);
    console.log('Student Added:', response.data);
    return response.data; // Return the added student data
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

/**
 * Update an existing student's details
 * @param {number} id - The ID of the student to update
 * @param {Object} updatedData - The updated student data
 */
export const updateStudentApi = async (id, updatedData) => {
  try {
    const response = await commonApi('PUT', `${serverUrl}/students/${id}`, updatedData);
    console.log('Student Updated:', response.data);
    return response.data; // Return the updated student data
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

/**
 * Delete a student
 * @param {number} id - The ID of the student to delete
 */
export const deleteStudentApi = async (id) => {
  try {
    const response = await commonApi('DELETE', `${serverUrl}/students/${id}`);
    console.log('Student Deleted:', response.data);
    return response.data; // Return the result of the deletion
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};




