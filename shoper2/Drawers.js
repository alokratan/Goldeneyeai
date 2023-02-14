import * as React from 'react';
import Drawerscreens from './Drawerscreens';
import { useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bottomtabs from '../shoper/Bottomtabs';
import Updatepercent from '../shoper/Updatepercent';
import Updatehide from '../shoper/Upadatehide';
const Appstack= createStackNavigator();
export default function Drawers() {
  const [islogin,setIslogin]=useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('AccessToken').then(value=>{
      if(value ==null){
        setIslogin(true);}
else{
  setIslogin(false);
}
    })
  },[])
  if(islogin === null){
    return null;
  }
  else if(islogin === true){
return(

  <Drawerscreens/>

)
  }

  else{
    return(
      <Drawerscreens/>
  //     <Appstack.Navigator>
         
  //       <Appstack.Screen options={{headerShown:false}} name="Drawerlogin" component={Bottomtabs} />
  //     <Appstack.Screen options={{headerShown:false}} name="onboarding" component={Drawerscreens} />
  //     <Appstack.Screen  options={{headerShown:false}}  name="percent" component={Updatepercent} />
  //  <Appstack.Screen  options={{headerShown:false}}  name="hide" component={Updatehide} />
      
  //   </Appstack.Navigator>
    
   
    )
  } 
}
