import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mb10}>NUMERO DE CLIQUES</Text>
      <Text style={styles.mb10}>{contador}</Text>
      <Button
        // style={styles.hyperButton} // nao adianta, nem funfa
        title="CLICA  AQUI!"
        onPress={(evt) => {
          console.log("Clicou no botão");
          setContador(contador + 1);
        }}
      />  

      <CustomButton
        titulozin={"- COMPONENTIZADO"} 
        onPress={(evt) => {
          console.log("Clicou no botão");
          setContador(contador - 1);
        }}
      />  

      <CustomButton
        titulozin={"+ COMPONENTIZADO"} 
        onPress={(evt) => {
          console.log("Clicou no botão");
          setContador(contador + 1);
        }}
      />  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mb10: {
    marginBottom: 10
  },
  hyperButton: {
    padding: '50px',
    margin: '50px',
    backgroundColor: '#FFF',
    // borderRadius: '1rem',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }
});
