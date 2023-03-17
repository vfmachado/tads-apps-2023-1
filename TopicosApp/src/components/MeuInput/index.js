import React from 'react';
import { TextInput, Text } from 'react-native';
import { GStyles } from '../../globalStyles';


export default function MeuInput(props) {
    return (
        <>
        <TextInput
            style={GStyles.input}
            value={props.value}
            onChangeText={props.change} 
        />
        {props.error && <Text style={GStyles.error}>O campo deve ter mais de 3 caracteres</Text>}
        </>
    )

}