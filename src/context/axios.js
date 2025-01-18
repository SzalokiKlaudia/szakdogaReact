import axios from "axios";

export const myaxios = axios.create({
    
    baseURL: "http://localhost:8000",
    timeout: 10000,
    widthCredentials:false,
 




})