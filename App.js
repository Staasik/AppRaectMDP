import React,{ useState } from "react";
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,Image,Button,TouchableOpacity,TextInput} from 'react-native';
import { SvgSelector } from './SvgDemoApp/SvgSelector';
TouchableOpacity.defaultProps = { activeOpacity: 0.5 };
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MainStack from './navigate'

export default function App() {
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
        <MainStack/>
    );
  }
