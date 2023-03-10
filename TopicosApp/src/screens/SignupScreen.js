import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <View style={GStyles.container}>
           
            {/* EXERCICIO - CRIAR UM COMPONENTE DE INPUT DE TEXTO COM LABEL, INPUT */}
            <View style={GStyles.mb10}>
                <Text>DIGITE SEU NOME</Text>
                <TextInput 
                    style={GStyles.input} 
                    value={name} 
                    onChangeText={(text) => {
                        setName(text);
                    }
                } />
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