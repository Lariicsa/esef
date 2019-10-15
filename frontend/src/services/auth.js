import axios from 'axios';
const baseURL = 'https://morning-mountain-24878.herokuapp.com/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },

  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  },
  checkUser: async (user) => {
    return await SERVICE.get('/user', user);
  }
};

export default AUTH_SERVICE;
