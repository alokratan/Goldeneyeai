import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Goldlogin from '../shoper/Goldlogin';
import Goldregister from '../shoper/Goldregister';
import Goldregister2 from '../shoper/Goldregister2';
import Setmpin from '../shoper/Setmpin';
import Forgotmpin from '../shoper/Forgotmpin';
import Bottomtabs from '../shoper/Bottomtabs';
import Verifynum from '../shoper/Verifynum'
import Entermpin from '../shoper/Entermpin';
import Entermpin2 from '../shoper/EnterMpin2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Forgotpassword from '../shoper/Forgotpassword';
import Goldlogin2 from '../shoper/Goldlogin2';
import Swiper5 from '../shoper/Animate';
const Drawer = createDrawerNavigator();
const Drawerscreens = () => {


  const [dataToken,setDataToken]=useState(false);
  useEffect(()=>{
    
    const handlegetToken= async ()=>{
      const dataToken =await AsyncStorage.getItem('AccessToken');
      
      setDataToken(dataToken)
      // console.log(dataToken);
      }
  
      handlegetToken();
      
    
  })
  
  
  return (

    
   <Drawer.Navigator initialRouteName={
    !dataToken?
   "Goldlogin": "Bottomtabs"
   } useLegacyImplementation>

        <Drawer.Screen  options={{headerShown:false}}  name="Goldlogin" component={Goldlogin} />
        <Drawer.Screen  options={{headerShown:false}}  name="Goldlogin2" component={Goldlogin2} />
          <Drawer.Screen  options={{headerShown:false}}  name="Verify" component={Verifynum} />
    <Drawer.Screen  options={{headerShown:false}}  name="Goldregis" component={Goldregister} />
    <Drawer.Screen  options={{headerShown:false}}  name="mpin" component={Entermpin} />
    <Drawer.Screen  options={{headerShown:false}}  name="mpin2" component={Entermpin2} />
    <Drawer.Screen  options={{headerShown:false}}  name="Goldregis2" component={Goldregister2} />
    <Drawer.Screen  options={{headerShown:false}}  name="Setmpin" component={Setmpin} />
    <Drawer.Screen  options={{headerShown:false}}  name="Forgot" component={Forgotmpin} />
    <Drawer.Screen  options={{headerShown:false}}  name="Forgotpass" component={Forgotpassword} />
    <Drawer.Screen  options={{headerShown:false}}  name="Bottomtabs" component={Bottomtabs} />
    <Drawer.Screen  options={{headerShown:false}}  name="likedis2" component={Swiper5} />
 </Drawer.Navigator>
  )
}

export default Drawerscreens

