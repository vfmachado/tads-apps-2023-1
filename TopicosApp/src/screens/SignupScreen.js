import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, ActivityIndicator } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
import MeuInput from '../components/MeuInput';
import { GStyles } from '../globalStyles';

export default function SignupScreen({ navigation, route }) {
    // EXERCICIO MASTER - RESOLVER O PROBLEMA DOS CONTAINERS!!!
    // CONTAINER DENTRO DE CONTAINER
    // EXERCICIO - UTILIZAR APENAS 1 STATE PARA OS 3 ATRIBUTOS
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // CREATE A FUNCTION TO FETCH A RANDOM PERSON FROM swapi.dev USING AXIOS
  const fetchPerson = async () => {
    // get a random number between 1 and 50
    const randomPersonId = Math.floor(Math.random() * 50) + 1;
    const response = await axios.get('https://swapi.dev/api/people/' + randomPersonId);
    setName(response.data.name);
  }

  useEffect(() => {
    setLoading(false);
  }, [name]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        fetchPerson()
    }, 2000);
  }, []);


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
                }}
            />
        </View>
    )
}