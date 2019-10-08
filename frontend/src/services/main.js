import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MAIN_SERVICE = {
  getUser: async (user) => {
    //const id = user._id
    return await SERVICE.get('/user/', user)
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
