import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, textInput, TextInput } from 'react-native';
import React, {useState} from 'react';


//const [list, setList] = useState(1);

export default function App() {
  return(
    <View style={styles.container}> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Foods To Eat </Text>
      </View>
      <View style={styles.bigContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='you look weird'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    backgroundColor: 'green'
  },
  bigContainer: {
    flex:13,
    backgroundColor: 'white',
    alignItems: 'center'
    
  },
  title:{
    fontSize: 40,
    //fontFamily: 'sans seriff',
  },
  textInput: {
    fontSize: 20,
    //color: 'black'
  }
});