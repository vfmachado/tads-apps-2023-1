import axios from "axios";

export const instanciaAPI = axios.create({
    baseURL: 'http://localhost:4001'
})

export default async function CadastraUsuario(name, email, password) {
    instanciaAPI.post('/v1/users/', {
        name,
        password,
        email,
        role: 'CLIENTE',
        imgUrl: ''
    })
}


export async function LogaUsuario(email, password) {
    const response = await instanciaAPI.post('/v1/users/login', {
        password,
        email,
    })
    return response.data;
}
