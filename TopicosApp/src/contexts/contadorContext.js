import { createContext, useState } from "react";
import { instanciaAPI } from "../services/cadastro";


export const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {

    const [contador, setContador] = useState(5);
    const [username, setUsername] = useState("Vinicius");

    const [user, setUser] = useState(null);
    const [token, setToken] = useState();

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    const salvaUsuarioLogado = (user, token) => {
        setUser(user);
        setToken(token);

        instanciaAPI.defaults.headers['authorization'] = 'Bearer ' + token

    }

    return (
        <ContadorContext.Provider value={{ 
            contador,  
            username, 
            user, 
            token, 
            
            incrementar, 
            decrementar, 
            salvaUsuarioLogado }}>
            {children}
        </ContadorContext.Provider>
    )

}

