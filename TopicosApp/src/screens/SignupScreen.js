import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, ActivityIndicator } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
import MeuInput from '../components/MeuInput';
import { GStyles } from '../globalStyles';
import BuscaNomeAleat, { CepSearch, ConectaLocalhost } from '../services/starwars';
import CadastraUsuario from '../services/cadastro';

export default function SignupScreen({ navigation, route }) {
    // EXERCICIO MASTER - RESOLVER O PROBLEMA DOS CONTAINERS!!!
    // CONTAINER DENTRO DE CONTAINER
    // EXERCICIO - UTILIZAR APENAS 1 STATE PARA OS 3 ATRIBUTOS
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [person, setPerson] = useState({
        name: '',
        age: ''
    })

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [ location, setLocation] = useState('LOCATION ');

    useEffect(() => {
        async function fetchMyAPI() {
            if (email.length == 8) {
                const resultado = await CepSearch(email);
                setLocation(resultado);
            }
        }
        fetchMyAPI();
    }, [email]);

    // CREATE A FUNCTION TO FETCH A RANDOM PERSON FROM swapi.dev USING AXIOS
  useEffect(() => {
    setLoading(false);
  }, [name]);

  useEffect(() => {
    setLoading(true);
    ConectaLocalhost();
    setTimeout(async () => {
        const result = await BuscaNomeAleat();
        console.log({ result })
        setName(result.name);
        setPerson(result)
    }, 1);
  }, []);

  const handleSignup = async () => {
    try {
        await CadastraUsuario(name, email, password);
        alert('USUARIO CADASTRADO COM SUCESSO');
        navigation.navigate('Home')
    } catch (error) { 
        console.log(' ERRO CADASTRO ')
        console.log({ error })
        alert('ERRO AO CADASTRAR')
    }
  }

    return (
        <View style={GStyles.container}>
           
            {/* EXERCICIO - CRIAR UM COMPONENTE DE INPUT DE TEXTO COM LABEL, INPUT */}
            <View style={GStyles.mb10}>
                <Text>DIGITE SEU NOME</Text>
                { loading ? <ActivityIndicator /> :
                <MeuInput 
                    value={name}
                    change={(text) => setName(text)}
                    error={name.length < 3}
                />
                }
            </View>

            {/* <View style={GStyles.mb10}>
                <Text>Idade provavel</Text>
                { loading ? <ActivityIndicator /> :
                <MeuInput 
                    value={person.age}
                    change={(text) => setName(text)}
                />
                }
            </View> */}
            
            <View style={GStyles.mb10}>
                <Text>DIGITE SEU EMAIL</Text>
                <TextInput
                    style={GStyles.input} 
                    value={email} 
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                />
            </View>

            <View>
                <Text>{JSON.stringify(location)}</Text>
            </View>

            {/* EXERCICIO - MOSTRAR **** NA SENHA AO INVES DO TEXTO */}
            <View style={GStyles.mb10}>
                <Text>DIGITE SUA SENHA</Text>
                <TextInput
                    style={GStyles.input} 
                    value={password} 
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                />
            </View>
           
            <CustomButton
                titulo={"CADASTRAR"}
                onPress={() => {
                    alert(JSON.stringify({
                        name, email, password
                    }));
                    handleSignup();
                }}
            />
        </View>
    )
}