import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { GStyles } from '../globalStyles';
import SignupScreen from './SignupScreen';
import SignIn from './SignIn';
const Stack = createNativeStackNavigator();


export const StackScreensLogado = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Dashboard"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};