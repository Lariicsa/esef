import axios from 'axios';
const baseURL = 'https://morning-mountain-24878.herokuapp.com/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MAIN_SERVICE = {
  getUser: async (user) => {
    return await SERVICE.get('/user/', user)
  },

  getGroup: async (group) => {
    const id = group.id
    return await SERVICE.get(`/groups/${id}`, group)
  },

  getStudents: async (students) => {
    return await SERVICE.get('/students', students)
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

  deleteStudent: async (student) => {
    console.log('pizza',student);
    
    const id = student
    return await SERVICE.delete(`/students/${id}`, {data : {id}});
  }
  
}



export default MAIN_SERVICE;
