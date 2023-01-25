import { StyleSheet,Pressable, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = () => {
    const logoutbytoken= async ()=>{
        const dataToken =await AsyncStorage.removeItem('AccessToken');
        
        console.log(dataToken);
        }   
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:'red',alignItems:'center'}}>
      <Text>Home</Text>
      <Pressable
      style={{backgroundColor:'green',width:100,height:40}}
       onPress={logoutbytoken}>       
<Text>
    Logout
</Text>
      </Pressable>
    </View>
  )
}

export default Home

