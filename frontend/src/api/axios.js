import axios from 'axios';
const BASE_URL = process.env.API_URL;

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});