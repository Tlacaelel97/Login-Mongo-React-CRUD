import axios from "./axios";

// peticion asincrona POST al backend register
export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);
