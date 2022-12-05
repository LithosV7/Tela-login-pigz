
import { appLoading}   from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextBase, TextInput, View,  } from 'react-native';

import {useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconn from 'react-native-vector-icons/Feather';


export default function App() {
  
  const [fontsLoaded] = useFonts({Poppins_500Medium, Poppins_700Bold
  })
if(!fontsLoaded){
  return appLoading;
}

  return (
<View style={{top:'-12%',alignSelf: 'center',position:'absolute'}}>
      <StatusBar style="auto" />

  <Icon style={{ position: 'absolute',top: '15%',left: -10  }}name = "arrowleft" size={'35'} color={'orange'}/>
  <Text style={{alignSelf: 'center',top: '16%',color: 'black',fontSize: 20, fontFamily: 'Poppins_500Medium'  }}>Visão geral</Text>
        
          
    <View >
      <ImageBackground colors={['#FA641E, #FF881F']} style={styles.square}></ImageBackground>
      <Text style={{left:'7%',top: '17%',color:'white',fontSize: 18, textDecorationStyle: 1 ,fontFamily: 'Poppins_500Medium' }}>Ganhos do dia</Text>
      <Text style={{left:'7%', top: '26%',color:'white', fontSize: 30, textDecorationStyle: 1 ,fontFamily: 'Poppins_500Medium'}}>R$ 150</Text> 
      <Text style={{left:'80%',top: '-9%',color:'white',fontSize: 18, textDecorationStyle: 1 ,fontFamily: 'Poppins_500Medium' }}>29/07</Text>
      <Iconn style={{ top: '1%',left: '83%'  }}name = "eye" size={'30'} color={'white'}/>
          
    </View>
              
      <View style={{left: '10%',position: 'absolute',top:'30%'}}>
        <Text style={{left: '-15%',alignSelf: 'center',top: '35%',color: 'black',fontSize: 20, fontFamily: 'Poppins_700Bold'  }}>Resumo das Entregas</Text>
        <ImageBackground style={styles.box}/>
        <ImageBackground style={styles.box2}/>
        <ImageBackground style={styles.box3}/>
      </View>

        <View>
              
          <Text style={{color: 'grey',left: '5%',top:'54%',color: 'black',fontSize: 16, fontFamily: 'Poppins_500Medium', color: 'grey'  }}>Aceitos</Text>
          <Text style={{right: '37%',alignSelf: 'center',top: '56%',color: 'black',fontSize: 38, fontFamily: 'Poppins_500Medium'  }}>15</Text>
              
          <Text style={{color: 'grey',top:'21%',left: '38%',color: 'black',fontSize: 16, fontFamily: 'Poppins_500Medium', color: 'grey'  }}>Rejeitadas</Text>
          <Text style={{left: '-2%', top:'22%', alignSelf: 'center',color: 'black',fontSize: 38, fontFamily: 'Poppins_500Medium'  }}>8</Text>

          <Text style={{top: '-12%',left: '77%',color: 'black',fontSize: 16, fontFamily: 'Poppins_500Medium', color: 'grey'  }}>Total</Text>
          <Text style={{left: '33%',top: '-11%',alignSelf: 'center',color: 'black',fontSize: 38, fontFamily: 'Poppins_500Medium'  }}>20</Text>

        </View>
            <View>
              <Text style={{top: '15%',fontSize: 18, fontFamily: 'Poppins_700Bold' }}>Iniciar Nova Entrega</Text>
              <Text style={{top: '15%',fontSize: 14, fontFamily: 'Poppins_500Medium' }}>Número de Identificação</Text>

              <TextInput style={styles.textInput}/>
              <TextInput style={styles.ok}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins_500Medium', color: 'white' }}>OK</Text>
              </TextInput>

              <TextInput style={styles.qr}/>
                <Icon style={{top: -27,left: 53,}}name = "qrcode" size={'35'} color={"white"}/>
                <Text style={{top: -59,left: '30%' ,fontSize: 20, fontFamily: 'Poppins_500Medium', color: 'white'}}>Escanear Qrcode</Text>
              
            </View>


            <View style={styles.line}/>
     
      

</View>
    
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  square:{
   
    fontSize: 20,
    backgroundColor: 'orange',
    borderRadius: 30, 
    top: '63%',
    height: 120, 
    width: 330,
    alignSelf:'center'
  },

  box: {
    width: 110,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft:10,
    top: '39%',
    left: '-19%'
  },

  box2: {
    width: 110,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft:10,
    top: '8.5%',
    left: '35%'
  
  },
  box3: {
    width: 110,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft:10,
    top: '-22%',
    left: '89%'
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
    top: '-33%' 
  },
  textInput:{
    width: '70%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'orange',
    borderWidth: 1,
    paddingLeft:10,
    top: '20%',
    left: '-1%'
 
},
ok:{
  width: '25%',
  height: 50,
  backgroundColor: 'orange',
  borderRadius: 60,
  top: '1%',
  left: '75%',
  paddingLeft: '8%'

 },
 qr:{
    width: '103%',
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 60,
    top: '6%',
    left: -5
    
   
},
 }
);
