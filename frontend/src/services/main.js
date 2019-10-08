import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MAIN_SERVICE = {
  getUser: async (user) => {
    return await SERVICE.get('/user/', user)
  },

  getGroup: async (group) => {
    const id = group.id
    return await SERVICE.get(`/groups/${id}`, group)
  },

  addStudent: async (student) => {
    return await SERVICE.post(`/students`, student);
  },

  addGroup: async (group) => {
    return await SERVICE.post(`/groups`, group);
  },

  addMeasurement: async(measurement)  => {
    return await SERVICE.post(`/measures`, measurement);
  },

  update: async (student) => {
    const id = student._id
    return await SERVICE.put(`/editstudent/${id}`, student);
  },

  delete: async (student) => {
    const id = student._id
    return await SERVICE.delete(`/students/${id}/delete`, student);
  }
  
}



export default MAIN_SERVICE;
