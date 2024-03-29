import React, { useContext, useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
import { ContadorContext } from '../contexts/contadorContext';
import { GStyles } from '../globalStyles';
import { StackScreensLogado } from './StackScreensLogado';
import { StackScreens } from './StackScreens';

export default function HomeScreen({ navigation }) {

    const context = useContext(ContadorContext);

    useEffect(() => {
        console.log(context.contador)
        if (context.contador == 7) {
            navigation.navigate('Profile');
        }
    }, [context.contador]);

    return (
        
        <View style={GStyles.container2}>
            <Text>Tela Home</Text>
            <Text>{context.contador}</Text>

            <Text>USUARIO: {context.user?.name}</Text>

            <CustomButton
                titulo={"SIGNUP"}
                onPress={() => {
                    // alert("QUERIA IR PARA A TELA PROFILE");
                    navigation.navigate('Signup', {
                        // username: 'Vinicius'
                    })
                    // context.incrementar();
                }}
            />

            <CustomButton
                titulo={"SIGNIN"}
                onPress={() => {
                   navigation.navigate('SignIn')
                }}
            />

            <CustomButton
                titulo={"PROFILE"}
                onPress={() => {
                    // alert("QUERIA IR PARA A TELA PROFILE");
                    // navigation.navigate('Profile', {
                    //     username: 'Vinicius'
                    // })
                }}
            />
        </View>
            
    )
}