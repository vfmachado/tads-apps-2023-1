import React, { useContext } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-web';
import { ContadorContext } from '../contexts/contadorContext';
import { GStyles } from '../globalStyles';

export default function ProfileScreen({ navigation, route }) {

    // const { username } = route.params;
    const context = useContext(ContadorContext);
    return (
        <View style={GStyles.container}>
            <Text>PROFILE DE: {context.username}</Text>
        </View>
    )
}