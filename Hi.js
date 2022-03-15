import React,{ useState } from "react";
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,Image,Button,TouchableOpacity,TextInput} from 'react-native';
import { SvgSelector } from './SvgDemoApp/SvgSelector';
TouchableOpacity.defaultProps = { activeOpacity: 0.5 };
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);


export default function Hi({navigation}) {

  const loadScene = () =>{
    navigation.navigate('Menu');
    //navigation.goBack()
  }

  const [text, setValue] = React.useState('');
  const onChange = (text) => {
    text = text.replace(/[^A-Za-zА-Яа-яЁё]/ig, '');
    setValue (text);}

    let [fontsLoaded] = useFonts({
      'OpenSans': require('./assets/fonts/OpenSans-Light.ttf'),
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
        <View style={styles.bar}>   
          <ImageBackground source={require('../AppRaectMDP/src/images/hi_img.png')} style={styles.image}>
              <Image
              style={styles.Logo}
              source={require('../AppRaectMDP/src/images/hi_icon.png')}/>
              <Text style={styles.text_icon}>Poise</Text>
              <Text style={styles.text}>Приложение для саморегуляции</Text>
              <Image
              style={styles.LogoIcon}
              source={require('../AppRaectMDP/src/images/icon.svg')}/>
              <TextInput
              autoCapitalize="none"
              maxLength={20}
              keyboardType={"visible-password"}
              style={styles.input}   
              onChangeText={onChange}  
              value={text}
              placeholder="Введите имя" 
              placeholderTextColor = "#FFFFFF"
              
            />
              <AppButton title="Начать" onPress={loadScene} />
          </ImageBackground>     
        </View>
    );
  }

  const styles = StyleSheet.create({
    image:{
      flex: 1,     
      height:'100%',
      width:'100%',
      justifyContent: 'flex-start',
      paddingTop:'20%',
      alignItems:'center',
    },
    input:{
      borderRadius: 10, 
      height:50,
      width:'90%',  
      borderWidth: 1,
      borderColor:'#FFFFFF',
      margin:25,
      paddingLeft:15,
      color: '#FFFFFF',
      fontFamily:'OpenSans',
    },
    button:{  
      backgroundColor: "#FF9254",
      borderRadius: 10, 
      height:50,
      width:'90%',
    },
    Logo:{
      height:70,
      width:70, 
      margin:10,
    },
    LogoIcon:{
      height:100,
      width:100, 
      marginTop:'10%',
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
      color: "white",
      fontSize: 16,
      margin:15,
      textAlign: "center",
      fontFamily:'OpenSans',
    },
    text_icon:{
      color: "white",
      fontSize: 38,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily:'OpenSans',
    }
  });
