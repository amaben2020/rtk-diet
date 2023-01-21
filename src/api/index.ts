import axios from 'axios';
/*create an instance of axios with a default base URI when sending HTTP 
requests*/
/*JSON Server has CORS Policy by default.*/
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_URL
      : 'http://localhost:3004/',
});
export default api;


export const EndPoints = {
  sales: 'sales',
  products: 'products',
  events: 'events',
  login: 'login',
  register: 'register',
  users: 'users',
  posts: 'posts',
  usersDb: 'users-db',
};
