import axios from 'axios';

let apiUrl;

const apiUrls = {
  production: 'https://full-crud-blog.herokuapp.com/api',
  development: 'http://localhost:4000/api'
  // development: 'https://full-crud-blog.herokuapp.com/api'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
};

const api = axios.create({
  baseURL: apiUrl
});

export default api;
