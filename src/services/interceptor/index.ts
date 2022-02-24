import axios from 'axios'

const axiosInterceptor = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'x-rapidapi-host': `${process.env.REACT_APP_RAPIAAPI_HOST}`,
    'x-rapidapi-key': `${process.env.REACT_APP_RAPIAAPI_KEY}`,
  },
})

export default axiosInterceptor
