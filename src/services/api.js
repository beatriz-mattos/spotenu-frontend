import axios from "axios";

const api = axios.create({
    baseURL: "https://2clwz7sfv5.execute-api.us-east-1.amazonaws.com/v1"
});

export default api;