import React from 'react';
import { Alert, Text } from 'react-native';
import { View } from 'react-native-web';
import CustomButton from '../components/CustomButton';
import { GStyles } from '../globalStyles';

export default function HomeScreen({ navigation }) {
    return (
        <View style={GStyles.container2}>
            <Text>Tela Home</Text>

            <CustomButton 
                titulo={"SIGNUP"}
                onPress={() => {
                    // alert("QUERIA IR PARA A TELA PROFILE");
                    navigation.navigate('Signup', {
                        // username: 'Vinicius'
                    })
                }}
            />

            <CustomButton 
                titulo={"PROFILE"}
                onPress={() => {
                    // alert("QUERIA IR PARA A TELA PROFILE");
                    navigation.navigate('Profile', {
                        username: 'Vinicius'
                    })
                }}
            />
        </View>
    )   
}