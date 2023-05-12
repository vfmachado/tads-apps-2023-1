import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

function Card(props) {
  return (
    <TouchableOpacity onPress={props.quandoClica} >
      <View style={{borderWidth: '1px', width: '50%', height: 100, margin: 20}}>
        <Text style={{fontSize: 18}}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function App() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {

    const newData = [];
    for (let i = 0; i < 1000; i++) {
      newData.push({
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
            console.log("RENDER DE CARD ... " + index)
            return (
              <Card key={item.text} text={item.text} quandoClica={
                () => setSelected(index)
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
