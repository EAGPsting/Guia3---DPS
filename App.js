import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Text, Card, Button, Icon } from 'react-native-elements';

const App = () => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card> 
            <Card.Title>Pupusas</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('./src/imgs/pupusas.jpg')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="call-outline" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Pidelas ahora!" 
              onPress={() => {alert('La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.​!')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>Riguas</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('./src/imgs/riguas.jpg')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            Tortas delgadas de maíz fresco y tierno que se cocinan en hojas de plátano. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="call-outline" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Pidelas ahora!" 
              onPress={() => {alert('Tortas delgadas de maíz fresco y tierno que se cocinan en hojas de plátano. !')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>Pastelitos</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('./src/imgs/pastelitos.jpg')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            Empanadas rellenas, fritas, suculentas y crujientes. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="call-outline" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Pidelas ahora!" 
              onPress={() => {alert('Empanadas rellenas, fritas, suculentas y crujientes.!')}} 
            /> 
          </Card> 
        </View> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: '#ecf0f1', 
  }, 
});

export default App;