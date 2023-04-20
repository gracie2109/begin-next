import axios from 'axios';

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}
// Create axios instance.
const axiosInstance = axios.create(defaultOptions)
export default axiosInstance
