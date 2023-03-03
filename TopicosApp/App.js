import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { GStyles } from './src/globalStyles';
import { StackScreens } from './src/screens/StackScreens';

export default function App() {

  const [contador, setContador] = useState(0);

  const [viewStack, setViewStack] = useState(false);
  

  useEffect(() => {

  }, []);

  return (
    <View style={GStyles.container}>
      {viewStack ?
        <StackScreens />
        :
        <>
          <Text style={GStyles.mb10}>NUMERO DE CLIQUES</Text>
          <Text style={GStyles.mb10}>{contador}</Text>
          {/* <Button
            // style={styles.hyperButton} // nao adianta, nem funfa
            title="CLICA  AQUI!"
            onPress={(evt) => {
              console.log("Clicou no botão");
              setContador(contador + 1);
            }}
          /> */}

          <CustomButton
            titulo={"- COMPONENTIZADO"}
            onPress={(evt) => {
              console.log("Clicou no botão");
              setContador(contador - 1);
            }}
          />

          <CustomButton
            titulo={"+ COMPONENTIZADO"}
            onPress={(evt) => {
              console.log("Clicou no botão");
              setContador(contador + 1);
            }}
          />

          <CustomButton
            titulo={"ABRE STACK"}
            onPress={(evt) => {
              console.log("Clicou no botão de stack");
              setViewStack(true);
            }}
          />

          <StatusBar style="auto" />
        </>
      }
    </View>
  );
}

