import axios from "axios";

export const api = axios.create({
    baseURL: 'http://ipPC:4000'
})