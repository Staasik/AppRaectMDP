import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ImageBackground } from 'react-native';
import { SvgSelector } from './SvgDemoApp/SvgSelector';
import Hi from './Hi'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.bar}>   
            <View style={styles.svg}>
            <SvgSelector id="Diagnost_icon" />
            </View>
            <Text style={styles.text}>Диагностика</Text>
          </View>
          <View style={styles.bar}>
          <View style={styles.svg}>
            <SvgSelector id="Tracker_icon"/>
            </View>
            <Text style={styles.text}>Трекер</Text>
          </View>
          <View style={styles.bar}>
          <View style={styles.svg}>
            <SvgSelector id="Chat_bot_icon" />
            </View>
            <Text style={styles.text}>Чат-бот</Text>
          </View>
          <View style={styles.bar}>
          <View style={styles.svg}>
            <SvgSelector id="Profile_icon"/>
            </View>
            <Text style={styles.text}>Профиль</Text>
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'end',
  },
  tap_bar: {
    backgroundColor: 'black',
  },
  bar:{
    flex: 1,  
    height:'12%',
    backgroundColor: '#DCDCDC',
    flexDirection:'colomn',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'rgba(255, 146, 84,0.25)'
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