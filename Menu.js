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
    <View></View>{/*поправить */}
    </View>
    <Text style={styles.textProf}>Профессиональное выгораниe</Text>
    <View style={styles.test}>
    <ImageBackground source={require('../AppRaectMDP/src/images/diag.png')} style={styles.image}>
    <Text style={styles.testText}>Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. </Text>
    <Text style={[styles.testText,{marginTop:35}]}>Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе. </Text>
    </ImageBackground> 
    </View>
    <View style={styles.answer}>


    </View>
    <AppButton title="Начать"  />
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.bar}
          activeOpacity={0.5}>
          <View style={styles.svg}>
            <SvgSelector id="Profile_icon"/>
            </View>
            <Text style={styles.text}>Профиль</Text>
            </TouchableOpacity>
          </View>
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
    marginTop:30,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
  },
  test:{    
    width:'95%', 
    flex: 4,   
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'#FFFFFF',
  },
  image:{     
    flex: 1,   
    width:'95%', 
    height:'100%',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignSelf:'center',
    paddingLeft:10,
  },
  answer:{
    width:'95%', 
    flex: 4,   
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
  },
  testText:{
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 15,
    fontFamily:'OpenSans',
    marginTop:15,
  },
  container: { 
    width:'100%', 
    flex: 1,   
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'end',
    backgroundColor: '#DCDCDC',
    marginTop:50,
  },
  bar:{
    flex: 1,  
    backgroundColor: '#DCDCDC',
    flexDirection:'colomn',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    // backgroundColor:'rgba(255, 146, 84,0.25)'
  },
  svg: {
    fill:'#666666',
    //fill:"rgba(255, 146, 84, 1)"
  },
  svgDiagn:{
    fill:'#666666',
  },
  text:{
    color:'#666666',
    // color:'rgba(255, 146, 84, 1)',
    fontWeight: 'bold',    
    fontSize: 13,
    textAlign: "center",
    fontFamily:'OpenSans',
  },
  textDiagn:{
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 20,
    fontFamily:'OpenSans',
    marginLeft:-35,
  },
  textProf:{
    flex: 1,  
    color:'#666666',
    fontWeight: 'bold',    
    fontSize: 20,
    fontFamily:'OpenSans',
    marginLeft:15,
    alignSelf:'flex-start',
    marginTop:18,
  },
  button:{
    flex: 1,   
    backgroundColor: "#FF9254",
    borderRadius: 10, 
    flex: 1,   
    width:'90%',
    alignSelf:'center',
  },
  textBut:{
    color: "white",
    fontSize: 16,
    margin:15,
    textAlign: "center",
    fontFamily:'OpenSans',
  },
});