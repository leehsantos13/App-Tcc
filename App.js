import React, { useState, useEffect, Component, } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Login from './src/components/login';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App(){
  

  
  const [user, setUser] = useState(null);

  const [time, setTime] =useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    let date = (today.getDate() <32 ? '' : '') + today.getDate();
    let month = (today.getMonth()<12 ? '': '') + today.getMonth();
    let year = (today.getFullYear() < 2000 ? '' : '')+today.getFullYear();
    return date +'/' + month +'/'+ year +' '+ hours + ':' + minutes + ':' + seconds;
  }
  
  
  
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />
  }
  
    
 
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>RELATE O OCORRIDO ABAIXO</Text>
      <Text style={styles.top1}>Ocorrência</Text>
      <Picker style={styles.picker1} 
      selectedValue={0} 
      onValueChange={(itemValue, itemIndex)=>({0:itemValue})} >

      <Picker.Item key={0} value={0} label=''  />
        <Picker.Item key={1} value={1} label='Escorregou' />
        <Picker.Item key={2} value={2} label='Material Danificado' />
        <Picker.Item key={3} value={3} label='Queda de projetor' />
        <Picker.Item key={4} value={4} label='Projetor com defeito' />
        <Picker.Item key={5} value={5} label='Ferido pela estrutura' />
        <Picker.Item key={6} value={6} label='Ferido por outro aluno' />
        <Picker.Item key={7} value={7} label='Alergia ' />
      </Picker >

      <Text>{console.log()}</Text>

      <Text style={styles.top2}>Local</Text>

      <Picker style={styles.picker2} selectedValue={0} 
      onValueChange={(itemValue, itemIndex)=>({0:itemValue})} itemStyle={Colors}>

      <Picker.Item key={0} value={0} label='' />
        <Picker.Item key={1} value={1} label='Patio Esamc'  style={styles.item} />
        <Picker.Item key={2} value={2} label='1° Andar' />
        <Picker.Item key={3} value={3} label='2° Andar' />
        <Picker.Item key={4} value={4} label='3° Andar' />
        <Picker.Item key={5} value={5} label='4° Andar' />
        <Picker.Item key={6} value={6} label='Biblioteca' />
        <Picker.Item key={7} value={7} label='Laboratorio 1 ' />
        <Picker.Item key={8} value={8} label='Laboratorio 2 ' />
      </Picker>

      <Text style={styles.paragraph}> {time}</Text>
      <TextInput placeholder="Descreva a ocorrência" style={styles.input} />

      
      
    </SafeAreaView>
  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: 10,
    fontSize: 20,

  },
  top1: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: 40,
    fontSize: 15,
  },
  top2: {
    fontWeight: 'bold',
    textAlign: 'center',
    top:-50,
    fontSize: 15,
  },
  picker1: {

    top:-40,
    paddingTop:-50,
    left:65,
    width:250,
   
  },
  picker2:{
    top:-130,
    paddingTop:-50,
    left:65,
    width:250,
  },
  paragraph: {
    top:-160,
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#D9D9D9',
    width:160,
    textAlign:'center',
    left:80
  },
  input:{
    textAlign:'center',
    backgroundColor:'#D9D9D9',
    height:150,
    top:-180,
    width:300,
    left:40,
    borderRadius:4,
    fontWeight:'bold',
  },


})
