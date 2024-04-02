import axios from "axios";

// url del backend
const API = "http://localhost:3000/api";

// peticion asincrona POST al backend register
export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);
