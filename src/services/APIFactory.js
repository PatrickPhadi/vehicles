import axios from 'axios';

export const api = axios.create({
    baseURL: "https://warpfrontendtestserver.herokuapp.com/v1"
})