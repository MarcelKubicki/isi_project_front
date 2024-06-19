import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Dodaj interceptor, który automatycznie dołącza token JWT do każdego żądania
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
      console.log("chuj ci w morde!!!")
    return Promise.reject(error);
  }
);

export default axios;