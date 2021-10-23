import axios from "axios";

export const api = axios.create({
    baseURL: 'http://ip do PC:4000'
})