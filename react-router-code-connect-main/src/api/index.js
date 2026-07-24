import axios from "axios";

// Connection with Axios
export const http = axios.create({
    baseURL: 'http://localhost:3000'
})

