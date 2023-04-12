import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { ContadorContext, ContadorProvider } from './src/contexts/contadorContext';
import { GStyles } from './src/globalStyles';
import { StackScreens } from './src/screens/StackScreens';
import { StackScreensLogado } from './src/screens/StackScreensLogado';
import NavigatorCerto from './NavigatorCerto';

export default function App() {

  // const [contador, setContador] = useState(0);

  const [viewStack, setViewStack] = useState(true);
  
  useEffect(() => {
    
    
  }, []);

  return (
    <ContadorProvider>
      <NavigatorCerto>
        
      </NavigatorCerto>
    </ContadorProvider>
  );
}

