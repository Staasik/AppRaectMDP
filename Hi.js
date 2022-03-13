import React from "react";
import { StyleSheet, Text, View, SafeAreaView,ImageBackground } from 'react-native';
import { SvgSelector } from './SvgDemoApp/SvgSelector';


import style from './App.module.css';
const image = { uri: "./src/images/hi_img.png" };

export default function App() {
    return (

        <View style={styles.bar}>   
        <ImageBackground source={require('../AppRaectMDP/src/images/hi_img.png')} resizeMode="cover" style={styles.image}></ImageBackground>
        </View>
    );
  }

  //<Image style= { styles.backgroundImage } source="./src/images/hi_img.png"></Image>
  const styles = StyleSheet.create({
    container: {
      flex: 1,    
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'end',
    },
    tap_bar: {
    },
    image:{
      flex: 1,     
       height:'100%',
      width:'100%',
      justifyContent: "center"
    },
    bar:{
      flex: 1,  
      flexDirection:'colomn',
      alignItems:'center',
      justifyContent:'center',
       //backgroundColor:'rgba(255, 146, 84,0.25)'
    },
    svg: {
      fill:'#666666',
      //fill:"rgba(255, 146, 84, 1)"
    },
    text:{
      color:'#666666',
      // color:'rgba(255, 146, 84, 1)',
      fontWeight: 'bold',    
      fontSize: 14,
    }
  });
