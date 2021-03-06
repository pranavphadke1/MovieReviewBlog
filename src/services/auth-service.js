import axios from "axios";
const API_URL = "http://localhost:4000/api"
const api = axios.create({withCredentials: true})

export const signup = async (email, password, role) => {
    const response = await api.post(`${API_URL}/signup`, {email, password, role})
    return response.data
}

export const signin = async (email, password) => {
    const response = await api.post(`${API_URL}/signin`,
                                    {email, password})
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${API_URL}/logout`)
    return response.data
}