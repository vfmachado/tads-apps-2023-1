
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import styled from 'styled-components/native';

const Title = styled.Text`
  width: 100%;
  font-size: 24px;
  text-align: center;
`

const Description = styled.Text`
  width: 100%;
  font-size: 14px;
`

const Botao = styled.Text`
  width: 100%;
  height: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.selected ? 'green' : 'red'}
  font-size: 16px;
  text-align: center;
`;


const ContainerCard = styled.TouchableOpacity`
  border-radius: 12px;
  border: 2px solid gray;
  margin: 20px;
  padding: 12px;
`

function Card({ title, text, quandoClica, selected}) {
  return (
    <ContainerCard onPress={quandoClica} >
      
        <Title>
          { title}
        </Title>

        <Description>{text}</Description>

        <Botao
          selected={selected}
        >
          SELECIONAR
        </Botao>
      
    </ContainerCard>
  );
}

export default function App() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect( () => {
    console.log("SELECTED MUDOU! " + selected)
  }, [selected])


  useEffect(() => {

    const newData = [];
    for (let i = 0; i < 30; i++) {
      newData.push({
        title: 'ITEM #' + i,
        text: "#" + i + "  RANDOM TEXT"
      })
    }

    setData(newData);


  }, []);

  return (
    // <ScrollView>
    //   {
    //     cards.map((card, idx) => {
    //       console.log("RENDER DE CARD ... " + idx)
    //       return (
    //         <Card key={card.text} text={card.text} />
    //       )
    //     })
    //   }
    // </ScrollView>
    <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={
        ({item, index}) => {
            // console.log("RENDER DE CARD ... " + index)
            return (
              <Card
                key={item.text} title={item.title} text={item.text} 
                selected={index == selected}
                quandoClica={
                () =>  {
                  console.log("CLIQUEI NO ITEM " + index);
                  setSelected(index)
                }
              } />
            )
          } 
      }
      keyExtractor={item => item.text}
      initialNumToRender={10}
    />
    
    <Text style={{marginBottom: 70, fontSize: 20}}>SELECIONADO: {selected} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
