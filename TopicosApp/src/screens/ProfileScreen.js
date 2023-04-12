import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-web';
import { ContadorContext } from '../contexts/contadorContext';
import { GStyles } from '../globalStyles';
import axios from 'axios';
import { instanciaAPI } from '../services/cadastro';

export default function ProfileScreen({ navigation, route }) {

    // const { username } = route.params;
    const context = useContext(ContadorContext);

    const [dados, setDados] = useState();

    const carregaDados = async () => {
        try {
            const response = await instanciaAPI.get('/v1/users');
            setDados(response.data)
        } catch (errors) {
            alert('DEU ERRO AO BUSCAR');
        }

    }
    
    useEffect( () => {
        carregaDados();
    }, []); 

    return (
        <View style={GStyles.container}>
            <Text>PROFILE DE: {context.user.name}</Text>
            <Text>{JSON.stringify(dados)}</Text>
        </View>
    )
}