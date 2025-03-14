import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Image } from 'react-native';

//componentes principal

export default function App() {
  //logica do meu componente
const nome ="Igor"

function alerta (){
  alert("voce clicou no Botão")
}



  //retorno jsx

  return (
    <View style={styles.container}>

      {/* comentaro dentro do template */}

      {/* codigo javascript */}
      
      <Text>Igor Marques</Text>
      <Text>{nome}</Text>
      <StatusBar style="auto" />

      <Button title='alerta' onPress={alerta}></Button>

    <Image 
    source ={{ uri: "https://i.pinimg.com/originals/43/33/5c/43335c11f6333469721776049443f3d1.gif"}}
    style={{
      height: 300,
      width: 300

    }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
