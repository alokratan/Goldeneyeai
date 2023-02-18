import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, BlurView } from 'react-native';
import HomeBottom from './HomeBottom';
import Setpref from './Setpref';
import Expiredcou from './Expiredcou';
import YourPro from './YourPro';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Bottomtabs({ route }) {
  
  useEffect(() => {

    const { mydata } = route.params;
    console.log('home', mydata);
    const {tokedat} =route.params;
    console.log('home',tokedat);

    // AsyncStorage.setItem('AccessTokenidd', mydata);
    console.log("hello,mydata", mydata);

  }, [])


  return (

    <Tab.Navigator
      initialRouteName='Setpre'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#FFC72C',
        tabBarInactiveBackgroundColor: 'black',

        tabBarLabelStyle: {
          marginBottom: 14,
          fontSize: 12,
          fontWeight: '700'
        },
        tabBarStyle: {
          position: 'absolute',
          height: 75
        },
        tabBarIcon: ({ focused, color }) => {

          let iconName;
          let rn = route.name;
          if (rn === 'HomeBot') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (rn === 'Setpre') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          else if (rn === 'Your') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (rn === 'Expired') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />
        }
      })}


    /* screenOptions={{
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'white',
         tabBarActiveBackgroundColor:'#FFC72C',
         tabBarInactiveBackgroundColor:'black',
         tabBarStyle:{
             height:60, 
         },
        // tabBarBadge:1,
       }}*/

    >
      <Tab.Screen  name="HomeBot"
        options={{
          title: 'Home',
          headerShown: false,

        }}

        //   options={{
        //       tabBarLabel: 'Home',
        //       tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home"  size={26} />
        //       ),
        //     }}
        component={HomeBottom} />
      <Tab.Screen name="Setpre" options={{

        title: 'Set Preference',
      }} component={Setpref} />
      <Tab.Screen name="Your" options={{
        title: 'Edit Profile',
      }} component={YourPro}

      />
      <Tab.Screen name="Expired" options={{
        title: 'Expired coupons',
        // tabBarBadge:10,

      }} component={Expiredcou} />
    </Tab.Navigator>

  );
}

export default Bottomtabs;