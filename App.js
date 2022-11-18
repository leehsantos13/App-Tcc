import React, { useState, useEffect, Component,useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, 
  Switch, KeyboardAvoidingView ,TouchableWithoutFeedback, Keyboard,TouchableOpacity, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Login from './src/components/login';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Ocorrencia(changeStatus){
  const[type,setType] = useState('Ocorrencia');

  const [Status, setStatus] = useState(false);
  const toggle = (state)=>{
    setStatus(state);
  }
  
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [ocorrenciaOpen, setOcorrenciaOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  const [inputDescreva, setInputDescreva] = useState(null);
  const [items, setItems] = useState([
    {label: 'Escorregou', value: 'Escorregou'},
    {label: 'Material Danificado', value: 'Material Danificado'},
    {label:'Queda de projetor', value:'Queda de projetor'},
    {label:'Projetor com defeito', value:'Projetor com defeito'},
    {label:'Ferido pela estrutura', value:'Ferido pela estrutura'},
    {label:'Ferido por outro aluno', value:'Ferido por outro aluno'},
    {label:'Alergia', value:'Alergia'},

  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Patio Esamc', value: 'Patio Esamc'},
    {label: '1° Andar', value: '1° Andar'},
    {label:'2° Andar', value:'2° Andar'},
    {label:'3° Andar', value:'3° Andar'},
    {label:'4° Andar', value:'4° Andar'},
    {label:'FBiblioteca', value:'Biblioteca'},
    {label:'Laboratorio 1', value:'Laboratorio 1'},
    {label:'Laboratorio 2', value:'Laboratorio 2'},

  ]);

  const OnocorrenciaOpen = useCallback(() => {
    setLocalOpen(false);
  }, []);

  const OnlocalOpen = useCallback(() => {
    setOcorrenciaOpen(false);
  }, []);

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
  const simpleAlert = ()=>
  Alert.alert('Sucesso', 'Ocorrência registrada com sucesso!',[{text:'OK', onPress:()=>Alert.alert(setInputDescreva(Text))}]);
  function clearInput(){
    
    setValue(null)
    setValue2(null)
    setInputDescreva('')
    
  }


  function handleFinalizar(){
      simpleAlert()
      clearInput()   
  }
    
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />
  }
  
  return (
   
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={styles.container} pointerEvents='box-none'> 
    
      <Text style={styles.header}>RELATE O OCORRIDO ABAIXO</Text>
      <Text style={styles.top1}>Ocorrência</Text>
      <DropDownPicker
      open={ocorrenciaOpen}
      onOpen={OnocorrenciaOpen}
      value={value}
      items={items}
      setOpen={setOcorrenciaOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.picker1}
      zIndex={3000}
      zIndexInverse={1000}
      placeholder={'Selecionar um item'}
      
      dropDownContainerStyle={{
        backgroundColor: "#D9D9D9",
        width:250,
        left:70,
        top:90
      }}
    />
      <Text style={styles.top2}>Local</Text>
      <DropDownPicker
      open={localOpen}
      onOpen={OnlocalOpen}
      value={value2}
      items={items2}
      setOpen={setLocalOpen}
      setValue={setValue2}
      setItems={setItems2}
      style={styles.picker2}
      zIndex={2000}
    zIndexInverse={2000}
    placeholder={'Selecionar um item'}

      dropDownContainerStyle={{
        backgroundColor: "#D9D9D9",
        width:250,
        left:70,
        top:120
      }}

    />



      <Text style={styles.paragraph}> {time}</Text>
      <TextInput placeholder="Descreva a ocorrência" style={styles.input} multiline={true} value={inputDescreva}/>
      <TouchableOpacity style={styles.handleContinuar} onPress={handleFinalizar}>
        <Text style={styles.continuar}>Continuar</Text>
    </TouchableOpacity>
      
    </SafeAreaView>
    
    </TouchableWithoutFeedback>
    
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
    fontSize: 20,
  },
  top2: {
    fontWeight: 'bold',
    textAlign: 'center',
    top:60,
    fontSize: 20,
  },
  picker1: {

    top:50,
    paddingTop:-50,
    left:70,
    width:250,
   
  },
  picker2:{
    top:70,
    paddingTop:-50,
    left:70,
    width:250,
    
  },
  paragraph: {
    top:60,
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#D9D9D9',
    width:160,
    textAlign:'center',
    left:85,
    textAlignVertical:'center'
  },
  input:{
    
    backgroundColor:'#D9D9D9',
    height:150,
    top:60,
    width:300,
    left:40,
    borderRadius:4,
    fontWeight:'bold'
    ,padding:10,
    textAlign:'justify',
    textAlignVertical:'top'
    

  },
  emergencia:{
    top:90,
    width:80,
    left:40,
    height:1000
  },
  ajuda:{
    left:60,
    width:200,
    top:8,
    fontWeight:'bold'
  },
  handleContinuar:{
    backgroundColor:'#32A0CF',
    width: 121,
    height: 39,
    left: 125,
    top: 130,
    borderRadius:10,
  },
  continuar:{
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:2,
    fontSize:20  
  },


})
