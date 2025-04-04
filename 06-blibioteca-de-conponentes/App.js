import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text ,Divider, Button} from 'react-native-paper'
import React from 'react';


export default function App() {
  return (
    <PaperProvider>

      <View style={styles.container}>
        
      </View>
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
