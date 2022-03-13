import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SVGImg  from '../AppRaectMDP/src/images/Chat_bot_icon.svg'
import { SvgUri } from 'react-native-svg';
export default function App() {

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={[styles.bar,{backgroundColor:'yellow'}]}>
        
      </View>
      <View style={[styles.bar,{backgroundColor:'red'}]}></View>
      <View style={[styles.bar,{backgroundColor:'green'}]}></View>
      <View style={[styles.bar,{backgroundColor:'pink'}]}></View>

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
    height:70,
    backgroundColor: 'black',
  },
  img:{
    width:50,
    height:50,
  }
});
