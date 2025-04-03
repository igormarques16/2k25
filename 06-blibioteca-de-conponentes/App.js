import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text ,Divider, Button} from 'react-native-paper'
import React from 'react';


export default function App() {
  return (
    <PaperProvider>
      
      <ScrollView>


      <Button mode= 'contained'>Clique</Button>
      <Button mode= 'elevated'>Clique</Button>
      

      <Text variant="displayLarge">Titulo Large</Text>
      <Divider style= {{width: "90"}} />
      <Text variant="displayMedium">Titulo Medium</Text>
      <Divider style= {{width: "90"}} />
      <Text variant="displaySmall">Titulo small</Text>
      <Divider style= {{width: "90"}} />

      <Text variant="headlineLarge">Titulo Large</Text>
      <Divider style= {{width: "90"}} />
      <Text variant="headlineMedium">Titulo Medium</Text>
      <Divider style= {{width: "90"}} />
      <Text variant="headlineSmall">Titulo Small</Text>
      <Divider style= {{width: "90"}} />

      <View style={styles.container}>
        <StatusBar styles="auto" />
        <Card style={{ margin: 15, backgroundColor: 'blue' }}>
          <Card.Content>
            <Title> Titulo </Title>
            <Paragraph> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</Paragraph>

          </Card.Content>

        </Card>
        <Card style={{ margin: 15, backgroundColor: 'red' }}>
          <Card.Content>
            <Title> Titulo </Title>
            <Paragraph> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</Paragraph>

          </Card.Content>

        </Card>

        <Card style={{ margin: 15, backgroundColor: 'purple' }}>
          <Card.Content>
            <Title> Titulo </Title>
            <Paragraph> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</Paragraph>

          </Card.Content>

        </Card>



      </View>
      </ScrollView>


      
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
