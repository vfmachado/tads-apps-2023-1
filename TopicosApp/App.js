import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { ContadorContext, ContadorProvider } from './src/contexts/contadorContext';
import { GStyles } from './src/globalStyles';
import { StackScreens } from './src/screens/StackScreens';

export default function App() {

  // const [contador, setContador] = useState(0);

  const [viewStack, setViewStack] = useState(true);
  
  // const context = useContext(ContadorContext);
  

  useEffect(() => {
    
    
  }, []);

  return (
    <ContadorProvider>
      {viewStack ?
        <StackScreens />
        :
        <View style={GStyles.container}>
          <Text style={GStyles.mb10}>NUMERO DE CLIQUES</Text>
          <Text style={GStyles.mb10}>{context.contador}</Text>
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
              // setContador(contador - 1);
              context.decrementar();
            }}
          />

          <CustomButton
            titulo={"+ COMPONENTIZADO"}
            onPress={(evt) => {
              console.log("Clicou no botão");
              // console.log("CONTADOR ANTES DO STATE: " + contador);
              // setContador(contador + 1);
              console.log("CONTADOR DEPOIS DO STATE: " + contador);
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
        </View>
      }
    </ContadorProvider>
  );
}

