import * as React from 'react';
import Drawerscreens from './Drawerscreens';
import { useState,useEffect,useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const Appstack= createStackNavigator();
export default function Drawers() {

  useFocusEffect(
    useCallback(
      () => {
        AsyncStorage.getItem('AccessToken').then(value=>{
          setIslogin2(true);
          if(value ==null){
            console.log("this is value",value);
            setIslogin(true);
          }
    else{
      setIslogin(false);
    }
        })
 
      },
      [],
    )
    
)

  const [islogin,setIslogin]=useState(null);
  const [islogin2,setIslogin2]=useState(null);

  if(islogin === null){
    return null;
  }
  else if(islogin === true){
return(

  <Drawerscreens islog={islogin2}/>

)
  }

  else{
    return(
      <Drawerscreens islo={true}/>
  //     <Appstack.Navigator>
         
  //       <Appstack.Screen options={{headerShown:false}} name="Drawerlogin" component={Bottomtabs} />
  //     <Appstack.Screen options={{headerShown:false}} name="onboarding" component={Drawerscreens} />
  //     <Appstack.Screen  options={{headerShown:false}}  name="percent" component={Updatepercent} />
  //  <Appstack.Screen  options={{headerShown:false}}  name="hide" component={Updatehide} />
      
  //   </Appstack.Navigator>
    
   
    )
  } 
}
