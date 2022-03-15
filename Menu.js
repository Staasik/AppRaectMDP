import React,{ useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity } from 'react-native';
import { SvgSelector } from './SvgDemoApp/SvgSelector';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
TouchableOpacity.defaultProps = { activeOpacity: 0.5 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.textBut}>{title}</Text>
  </TouchableOpacity>
);

export default function Menu() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Light.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.containerall}>
      <View style={styles.containerDiagn}>
          <View style={styles.svgDiagn}>
            <TouchableOpacity style={styles.svgDiagn}>
            <SvgSelector id="Caret_Left" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textDiagn}>Диагностика 1</Text>
      </View>
      <View style={styles.Prof}>
          <Text style={styles.textProf}>Профессиональное выгораниe</Text>
      </View>
      <View style={styles.test}>
          <ImageBackground source={require('../AppRaectMDP/src/images/diag.png')} style={styles.image}  resizeMode="stretch">
          <Text style={[styles.testText,{marginTop:-20}]}>Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. </Text>
          <Text style={styles.testText}>Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе. </Text>
          </ImageBackground> 
      </View>
      <View style={styles.Prof}>
          <Text style={styles.textProf}>Варианты ответов</Text>
      </View>
      <View style={styles.answer}>
          <View style={[styles.answernum,{borderTopColor:'#D3D3D3',borderTopWidth: 2,}]}>
              <Text style={styles.answeText}> 0    Никогда</Text>
              <Text style={styles.answeText}> 4    Часто</Text>
          </View>
          <View style={styles.answernum}>
              <Text style={styles.answeText}> 1    Очень редко</Text>
              <Text style={styles.answeText}> 5    Очень часто</Text>
          </View>
          <View style={styles.answernum}>
              <Text style={styles.answeText}> 2    Редко</Text>
              <Text style={styles.answeText}> 6    Ежедневно</Text> 
          </View>
          <View style={styles.answernum}>
              <Text style={styles.answeText}> 3    Иногда</Text>
          </View>
      </View>
      <View style={styles.but}>
          <AppButton title="Начать"  />
      </View>
      <View style={styles.container}>
      <ImageBackground source={require('../AppRaectMDP/src/images/menu.png')} style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.bar}>
                  <View style={styles.svg}>
                  <SvgSelector id="Diagnost_icon" />
                  </View>
                  <Text style={styles.text}>Диагностика</Text>
                </TouchableOpacity>   
            </View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.bar}>
                <View style={styles.svg}>
                  <SvgSelector id="Tracker_icon"/>
                  </View>
                  <Text style={styles.text}>Трекер</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.bar}>
                <View style={styles.svg}>
                  <SvgSelector id="Chat_bot_icon" />
                  </View>
                  <Text style={styles.text}>Чат-бот</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.bar}>
                <View style={styles.svg}>
                  <SvgSelector id="Profile_icon"/>
                  </View>
                  <Text style={styles.text}>Профиль</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerall:{
    flex: 1,   
    width:'100%', 
    height:'100%',
    backgroundColor:'#FFFFFF',
    flexDirection:'colomn',
    alignItems:'center',
    justifyContent:'center',
  },
  containerDiagn:{
    flex: 1,   
    width:'100%', 
    marginTop:'7%',
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
  },
  test:{    
    width:'95%', 
    flex: 4,
  },
  testText:{
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 12,
    fontFamily:'OpenSans',
    margin:10,
  },
  image:{     
    flex: 1,   
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
    width:'100%', 
    height:'100%',

  },
  answer:{
    width:'90%', 
    flex: 3,   
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
  },
  answernum:{
    flex: 1,   
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 2,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  answeText:{
    flex: 1,   
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 14,
    fontFamily:'OpenSans',
    marginLeft:10,
  },
  container: { 
    width:'100%', 
    flex: 1.4,   
    flexDirection:'row',
    justifyContent:'center',
  },
  bar:{
    flex: 1,  
    flexDirection:'colomn',
    alignItems:'center',
    paddingTop:5,
    justifyContent:'center', 
    // backgroundColor:'rgba(255, 146, 84,0.25)'
  },
  svg: {
    fill:'#666666',
    //fill:"rgba(255, 146, 84, 1)"
  },
  svgDiagn:{
    flex: 1,  
    fill:'#666666',
  },
  text:{
    color:'#666666',
    // color:'rgba(255, 146, 84, 1)',   
    fontSize: 12,
    textAlign: "center",
    fontFamily:'OpenSans',
    fontWeight: 'bold', 
  },
  textDiagn:{
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 18,
    fontFamily:'OpenSans',
    marginLeft:'15%',
    flex:4,  
  },
  Prof:{
    flex: 1,  
    color:'#666666',
    marginLeft:15,
    justifyContent:'center',
    alignSelf:'flex-start',
  },
  textProf:{ 
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 18,
    fontFamily:'OpenSans',
  },
  button:{ 
    backgroundColor: "#FF9254",
    borderRadius: 10, 
    width:'90%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
  },
  but:{
    flex: 1.6,  
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  textBut:{
    color: "white",
    fontSize: 16,
    alignSelf:'center',
    textAlign: "center",
    fontFamily:'OpenSans',
  },
});