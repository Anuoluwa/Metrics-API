import Axios from 'axios';
const baseURL = "http://localhost:4000/api/v1";

export const axios = Axios.create({ baseURL });