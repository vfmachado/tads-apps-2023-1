import { createContext, useState } from "react";


export const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {

    const [contador, setContador] = useState(5);
    const [username, setUsername] = useState("Vinicius");
    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return (
        <ContadorContext.Provider value={{ contador,  username, incrementar, decrementar }}>
            {children}
        </ContadorContext.Provider>
    )

}

