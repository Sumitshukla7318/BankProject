import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8000/api",
});

export const getCustomers = () => API.get('/customers/');
export const login = (email, password) => API.post('/login/', { email, password });