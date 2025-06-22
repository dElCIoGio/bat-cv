import axios from "axios";


export const apiClient = axios.create({
    baseURL: `localhost:8000/api/v1`,
    headers: {
        "Accept": "application/json"
    },
    withCredentials: true,
});
