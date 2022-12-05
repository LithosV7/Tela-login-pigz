import {appLoading} from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {useFonts, Poppins_700Bold, Poppins_400Regular} from '@expo-google-fonts/poppins';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


 
  
  function entrar(){
    alert('ok');
  }
  function google(){
    alert('ok');
  }

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold
  })
  
  if(!fontsLoaded){
    return appLoading;
  }
  
  

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Image style= {{marginTop: 80}}source={require('./assets/pigz.jpg')} />
    <Text style={{marginBottom: 30, fontFamily: 'Poppins_700Bold', fontSize: 20 }}>Para entregadores!</Text> 
    
    <Text style={{right: 135, marginBottom: 10, fontFamily: 'Poppins_700Bold', fontSize: 20 }}>Login</Text>
    <Text style= {{fontFamily: 'Poppins_400Regular',right: 110, marginBottom: 10}}>Email ou Telefone</Text>
    
    <TextInput placeholder="example@pigz.com.br" style={styles.textInput} />
    <Text style= {{fontFamily: 'Poppins_400Regular',right: 140, marginBottom: 10}}>Senha</Text>
    
    <TextInput placeholder = "******" style={styles.textInput} />
    <Text  style = {{fontFamily: 'Poppins_400Regular', textDecorationLine: "underline" ,right: 97, marginTop: -10}}>Esqueci minha senha</Text>
    
     <TouchableOpacity style={styles.btnEntrar} onPress={()=>entrar()}>
      <Text style = {{top: 2 ,fontFamily: 'Poppins_400Regular',color: 'white', marginTop: 10, left: 140, fontFamily: 'Poppins_700Bold', fontSize: 18}}>Entrar</Text>
     </TouchableOpacity>

     <Text style= {{fontFamily: 'Poppins_400Regular',marginTop: 10,right: 38}}>Não tem uma Conta?</Text>
     <Text style={{top: -1.5, fontFamily: 'Poppins_400Regular',right: 72, marginTop: 545, color: 'orange', position: 'absolute'}}>Criar agora!</Text>

     <TouchableOpacity style={styles.btnGoogle} onPress={()=>google()}>
      <Image style= {{size: 20, marginTop: 12, left: 20,  position: 'absolute'}}source={require('./assets/google.jpg')} />
      <Text style = {{color: 'grey',top: 2, marginTop: 10, left: 78, fontFamily: 'Poppins_700Bold', fontSize: 17}}>Continuar com Google</Text>
     </TouchableOpacity>

 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    padding:20, 
    marginBottom: 30
  },
  textInput:{
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'orange',
    borderWidth: 1,
    paddingLeft:10,
    marginBottom: 20
    
  },
  btnEntrar:{
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 60,
    marginTop: 20


  },
  btnGoogle:{
    width: '100%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 60,
    marginTop: 20


  }
}); 
