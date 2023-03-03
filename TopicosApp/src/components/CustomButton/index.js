import React from 'react';
import { Text,  Pressable } from 'react-native';

import { styles } from './styles';


export default function CustomButton(props) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.titulo}</Text>
        </Pressable>
    )

}