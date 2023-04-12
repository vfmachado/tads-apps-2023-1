import React, { useContext, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
import { GStyles } from '../globalStyles';
import  { LogaUsuario } from '../services/cadastro';
import { ContadorContext } from '../contexts/contadorContext';

export default function SignIn({ navigation, route }) {
    
    const context = useContext(ContadorContext  );


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const handleSignIn = async () => {
    try {
        const resultadoLogin = await LogaUsuario(email, password);
        context.salvaUsuarioLogado(resultadoLogin.user, resultadoLogin.token);
        console.log({ resultadoLogin})
        alert('USUARIO LOGADO COM SUCESSO');
        navigation.navigate('Home')
    } catch (error) { 
        console.log(' ERRO LOGIN ')
        console.log({ error })
        alert('ERRO AO LOGAR')
    }
  }

    return (
        <View style={GStyles.container}>
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
                titulo={"LOGAR"}
                onPress={() => {
                    handleSignIn();
                }}
            />
        </View>
    )
}