import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-web';
import { GStyles } from '../globalStyles';

export default function ProfileScreen({ navigation, route }) {

    const { username } = route.params;

    return (
        <View style={GStyles.container}>
            <Text>PROFILE DE: {username}</Text>
        </View>
    )
}