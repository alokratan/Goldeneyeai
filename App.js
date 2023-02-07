
import { useState,useEffect } from 'react';
import App2 from './App2'
import Drawers from './shoper2/Drawers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Appstack= createStackNavigator();

export default function App() {
  const [firsttime,setFirsttime]=useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('aleradylaunched').then(value=>{
      if(value ==null){
AsyncStorage.setItem('aleradylaunched','true');
setFirsttime(true);}
else{
  setFirsttime(false);
}
    })
  },[])


  if(firsttime === null){
    return null;
  }
  else if(firsttime === true){
return(
  <NavigationContainer>
  <Appstack.Navigator>
    <Appstack.Screen options={{headerShown:false}} name="onboarding" component={App2} />
    <Appstack.Screen options={{headerShown:false}} name="Drawerlogin" component={Drawers} />
  </Appstack.Navigator>
</NavigationContainer>
)
  }

  else{
    return(
      <NavigationContainer>
      <Drawers/>
    </NavigationContainer>
    )
  } 
}
