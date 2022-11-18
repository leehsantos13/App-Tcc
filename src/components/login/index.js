import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from '../../services/firebaseConnection';

export default function Login({changeStatus}){
    const[type,setType] = useState('login');
    const[email, SetEmail] = useState('');
    const[password, SetPassword] = useState('');

   

    function handleLogin(){
        if(type === 'login'){
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
                alert("VERIFIQUE SE A ÁREA É PERMITIDA E SEGURA PARA USO DE SMARTPHONE!")
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(err);
                alert('Ops parece que deu algum erro.');
                return
            })

        }else{
            const user = firebase.auth().createUserWithEmailAndPassword(email, password).then((user) =>{
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(user.user);
                alert('Ops');
                return;
            })

        }
        
    }
 
return(
  <SafeAreaView style={styles.container}>
    <Text style={styles.tcc}>LOGIN</Text>
    
    <TextInput placeholder="Seu email" style={styles.input} value={email} onChangeText={(text)=> SetEmail(text)} />
    <TextInput placeholder="********" style={styles.input} value={password} onChangeText={(text)=> SetPassword(text)} />
    
    <TouchableOpacity style={styles.handleLogin} onPress={handleLogin}>
        <Text style={styles.login}>{type === 'login' ? 'Acessar' : 'Cadastrar'}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.handleCadastro} onPress={()=> setType(type => type === 'login' ? 'cadastrar' : 'login' )}>
        <Text style={styles.criar}>{type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
        <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
    </TouchableOpacity>
    
    <Text style={styles.content}>Para login use seu email que está localizado no crachá e no local da senha, sua data de nascimento.</Text>

  </SafeAreaView>

  
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40,
    backgroundColor:'#32A0CF',
    paddingHorizontal:10,
  },
  input:{
    marginBottom:10,
    backgroundColor:'#FFF',
    borderRadius:4,
    height:45,
    left:40,
    width:300,
    top:190,
    padding:10,
    borderWidth:1,

  },
  handleLogin:{
    width: 120,
    height: 25,
    left: 40,
    top: 190,
    borderWidth:1,
    borderColor:'#000',
    paddingLeft:0,
    paddingTop:2,
    backgroundColor:'#FFF',
    borderRadius:4,
    
  },
  tcc:{
    textAlign:'center',
    top:160,
    fontWeight:'bold',
    
    fontSize:20,
  },
  content:{
    width: 235,
    height: 77,
    left: 66,
    top: 350,
    
    
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 19,

color: '#000000',
  },
  esqueceu:{
    width: 259,
    height: 24,
    left: 40,
    top: 170,
    
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 19,

    color: '#000000',

  },
  handleCadastro:{
    width: 150,
    height: 25,
    left: 190,
    top: 165,
    borderWidth:1,
    borderColor:'#000',
    paddingLeft:0,
    paddingTop:2,
    backgroundColor:'#FFF',
    borderRadius:4,
  },
  criar:{
    textAlign:'center',
    fontSize:13,
    fontWeight:'bold',
  },
  login:{
    textAlign:'center',
    fontWeight:'bold',

  },
  



})