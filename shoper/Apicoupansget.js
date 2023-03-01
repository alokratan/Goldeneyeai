import { StyleSheet,ToastAndroid,ScrollView,StatusBar, Text, View, Button, Pressable, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import React, { useState,useEffect,useCallback } from 'react';

import { MaterialIcons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { data } from "./coupans";
import AsyncStorage from '@react-native-async-storage/async-storage';
import phot from '../assets/icons/imglogo.jpg';
import axios from 'axios';
import * as Location from 'expo-location';
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import * as Network from 'expo-network';
import { useFocusEffect } from '@react-navigation/native';
import { requestFrame } from 'react-native-reanimated/lib/reanimated2/core';
const HomeBottom = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [level, setLevel] = useState(0);
    const [ippadd, setIppadd] = useState('');

    const [select, setSelect] = useState(data);
    const [redeemed, setRedeemed] = useState(false);
    const [islog,setIslog]=useState(false);
    const [full_name,setFull_name]=useState('');
    const [respons, setRespons] = useState('')
    const [device_info, setDevice_info] = useState('')
    const [coupon,setCoupon]=useState(null);
    useFocusEffect(
        useCallback(
          () => {

        
                fetchdata();
                locations();
                devicebattery();
                handlenetword();
                getcoupans();
                deciveinformation()
           
          
          },
          [],
        )
        
    )
const alldata=`Device location :${JSON.stringify(location)} , battery: ${level}, ip address: ${ippadd}`
console.log(typeof(alldata))


    
      const handlenetword= async()=>{
        const {isInternetReachable}  = await Network.getNetworkStateAsync();
        const strr=JSON.stringify(isInternetReachable);
     const resp=true
     console.log('hello strig26 :',resp);
     if(resp===true){
        setRespons(1);
     }else{
        setRespons(0);
     }
   
  
        
      }

    //   const iemidevice =async()=>{
    //     const iemi =await Device.getDeviceIdAsync();
    //     iemi.then((result)=>{
    //         console.log(result);
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    
    //   }
    const devicebattery=async()=>{
        const currentLevel = await Battery.getBatteryLevelAsync();
        setLevel(currentLevel*100);

        const ipadd = await Network.getIpAddressAsync();
        setIppadd(ipadd);
    }
   const locations  = async ()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
   }
    
   let text = 'Waiting..';
   if (errorMsg) {
     text = errorMsg;
   } else if (location) {
     text = JSON.stringify(location);
     console.log("this is latitude ",location.coords.latitude);
     console.log("this is longitude ",location.coords.longitude);
   }
  const fetchdata = async()=>{
     await AsyncStorage.getItem('AccessTokendata').then(value => {
          console.log('userid', typeof(value));
          const bad=JSON.parse(value);
          console.log('userid', typeof(bad));
          setFull_name(bad.full_name)
          console.log(bad.assigned_coupon);
                   
      })
    } 

    const getcoupans = async ()=>{

        const response4 =await axios.get('http://geyeapp.consultit.co.in:8000/users/1/coupons/');
        console.log("hi this is coupon data ",response4.data);
        console.log(typeof(response4.data));
        setCoupon(response4.data)
    }
    
        
console.log(typeof(respons))
console.log(respons)
    const deciveinformation =async()=>{
        try{
            
              const response  = await axios.post('http://geyeapp.consultit.co.in:8000/device-info/',{
                device_info:`Latitude:${location.coords.latitude},Longitude:${location.coords.longitude},Battery:${level},IP Address: ${ippadd},Network :${respons}`,
                user:"5"
            });
       
            console.log(device_info);
      


            
        }
        catch(error){
            console.log(error);
            
        }
    
    }

    // console.log(select);

    const like = (item) => {
        deciveinformation()
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return {
                    ...val, islike: !val.islike,dislike:val.null
                }
            }
            else {
                return val;
            }
        })
        setSelect(newitem)

    }

    
    const dislike = (item) => {
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, dislike: !val.dislike,islike:val.null }
            }
            else {
                return val;
            }
        })
        setSelect(newitem)
    }
   
    const isredd = (item) => {
        const newitem = select.map((val) => {            
            if (val.id === item.id) {
                 setRedeemed(true)
                 setTimeout(() => {
                     setRedeemed(false)
                 }, 2000);
                return { ...val, isredeem: !val.isredeem
                   }
            }else {
                return val;
            }
        })
         setSelect(newitem)
    }

    const logoutfn =()=>{
    
        setIslog(true)
       
        ToastAndroid.show('Logout Successfully', 1000)
   
         AsyncStorage.removeItem('AccessToken', (err) => console.log('AccessToken', err));
         AsyncStorage.removeItem('Accessuserid', (err) => console.log('AccessTokendata', err));
      
        setTimeout(() => {
            setIslog(false)
            navigation.navigate('LoginHome')
        }, 1000);
    }
    return (


        <View style={styles.container}>
         
             <StatusBar
            animated={true}
            backgroundColor='white'
            showHideTransition={'slide'}
     
        barStyle={'dark-content'}


            />
              {islog?

<View style={styles.successmain}>

            <View style={styles.sucess}>
            <Text style={{fontSize:21,fontWeight:'900',width:'90%',color:'black'}}>
                
                LOGOUT</Text>
            <Text style={{fontSize:17,width:'90%',fontWeight:'700',color:'black'}}>
                Are you sure want to logout?
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center' ,width:'80%',height:50}}>
                <Pressable onPress={()=>setIslog(false)} style={[styles.presbtnlog,{backgroundColor:'#0008'}]}>
                    <Text style={styles.textlogout}>
                        Cancel
                    </Text>
                </Pressable>
                <Pressable onPress={logoutfn} style={[styles.presbtnlog,{backgroundColor:'#D72500'}]}>
                    <Text  style={styles.textlogout}>
                        Logout
                    </Text>
                </Pressable>
            </View>
            </View>
        </View>
:<View></View>}
            <View style={{width:'90%',height:50,backgroundColor:'#fff',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'700'}}>Home</Text>
            <Pressable
            onPress={()=>setIslog(true)} style={{width:50,height:50,justifyContent:'center',alignItems:'center',marginRight:-20}}>
    <MaterialCommunityIcons name='location-exit' style={{transform:[{rotate:'-90deg'}]}} size={30} color='#FFC72C'/>
  
</Pressable>
            </View>

            <Image
                style={styles.phot}
                source={phot}
            />
            <Text style={styles.h2}>
                Namaste, {full_name.split(" ")[0]}
                </Text>
<Text>{text}</Text>
<Text>battery{level}</Text>
<Text>ip address:{ippadd}</Text>
<Text>network:{respons}</Text>


            <Text style={styles.h4}>Here some surprise coupons for you only</Text>
            {
                redeemed ? <View style={styles.termsdivmain}>

                    <View style={styles.termsdiv}>
                    <Text style={{fontSize:30,fontWeight:'900',marginVertical:20}}>
                        Congratulations!
                    </Text>
                    <Text style={{fontSize:20,fontWeight:'700',marginVertical:20}}>
                        Enjoy Your Discounted Coupon.
                    </Text>
                    <Text style={{width:'80%',backgroundColor:'black',height:2,marginVertical:20}}>
                    
                    </Text>
                    <Text style={{fontSize:20,fontWeight:'700'}}>
                        YOUR REDEEM CODE
                    </Text>
                    <View style={{marginVertical:20,borderStyle:'dashed' , borderWidth:1 ,width:130,height:60,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'700'}}>ZA76AE</Text>
                    </View>
                       
                    </View>
                </View> : <View></View>
            }


            <View style={{ backgroundColor: '#FBEFD2',width:'100%',justifyContent:'center',alignItems:'center'}}>
                {
                coupon && coupon.map(item=>(
                    
                    <View style={styles.main3} key={item.id}>
                            <View style={styles.maindots}>
                            </View>
                            <View style={styles.main3l}>
                                <Text style={{ fontSize: 14, fontWeight: '700' }}>
                                Shop No :{item.shop[0]}
                                </Text>
                                <View style={styles.photodiv}>
                                    <Image
                                        style={styles.phot2}
                                        source={{uri:`http://geyeapp.consultit.co.in:8000/${item.shop[1]}`}}
                                    />
                                </View>

                            </View>
                            <View style={styles.main3r}>

                                <Text style={styles.textdis}>
                                    Discount Upto
                                </Text>
                                <Text style={styles.textper}>
                                {item.discount}
                                </Text >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: 20 }}>
                                    <Text style={styles.textval}>
                                        REDEEM CODE
                                    </Text>
                                    <Text style={styles.textval2}>
                                        {item.coupon_code}
                                    </Text>
                                </View>

                            </View>


                            <View style={styles.maindots}>

                            </View>

                        </View>
                    // <View>
                    // <Text>
                    //    ID : {item.id}
                    // </Text>
                    // <Text>
                    //    COUPON CODE : {item.coupon_code}
                    // </Text>
                    // <Text>
                    //    DISCOUNT PERCENT {item.discount}
                    // </Text>
                    // <Text>
                    //    VALID TO {item.discount}
                    // </Text>
                    // </View>
                 ))
                }
            </View>
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                data={select}
                style={styles.main}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View style={styles.main2}>
                        <View style={styles.main3}>
                            <View style={styles.maindots}>
                            </View>
                            <View style={styles.main3l}>
                                <Text style={{ fontSize: 14, fontWeight: '700' }}>
                                    {item.shopno}
                                </Text>
                                <View style={styles.photodiv}>
                                    <Image
                                        style={styles.phot2}
                                        source={item.img}
                                    />
                                </View>

                            </View>
                            <View style={styles.main3r}>

                                <Text style={styles.textdis}>
                                    {item.dupto}
                                </Text>
                                <Text style={styles.textper}>
                                    {item.percet}
                                </Text >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: 20 }}>
                                    <Text style={styles.textval}>
                                        {item.valid}
                                    </Text>
                                    <Text style={styles.textval2}>
                                        {item.stepsaway}
                                    </Text>
                                </View>

                            </View>


                            <View style={styles.maindots}>

                            </View>

                        </View>
                        <View style={styles.main32}>

                            <View style={styles.main33}>

                                <MaterialIcons onPress={() => like(item)} name="thumb-up-off-alt" size={30} color={item.islike ? "#0179F3" : "grey"} />
                                <MaterialIcons onPress={() => dislike(item)} name="thumb-down-off-alt" size={30} color={
                                    item.dislike ? "red" : "grey"
                                } />
                            </View>

                            {
                                item.isredeem?
                                <Pressable
                                style={styles.txt2}
                              
                                backgroundColor={
                                    item.isredeem ? "#FFC72C" : "black"
                                }
                            >
                                {
                                  item.isredeem?  <Text style={[styles.txt3,{color:'black',fontWeight:'700'}]}>
                                    {item.redcode}
                                </Text>:<Text style={styles.txt3}>
                                  Redeem
                              </Text>
                                }
                                
                            </Pressable>:
                            <Pressable
                            style={styles.txt2}
                            onPress={() => isredd(item)
                            }
                            backgroundColor={
                                item.isredeem ? "#FFC72C" : "black"
                            }
                        >
                            {
                              item.isredeem?  <Text style={[styles.txt3,{color:'black',fontWeight:'700'}]}>
                                {item.redcode}
                            </Text>:<Text style={styles.txt3}>
                              Redeem
                          </Text>
                            }
                            
                        </Pressable>
                            }    
                            

                        </View>

                    </View>

                }}

            />
           */}
        </View>
    )
}

export default HomeBottom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    h2: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: '900'
    },
    h4: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '700'
    },
    main: {
        backgroundColor: '#FBEFD2',
        marginBottom: '18%',
        width: '100%',

    },
    main2: {
        // backgroundColor: 'green',
        width: '100%',
        height: 170,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderBottomWidth: 2,
        // borderBottomColor: 'white'

    },
    main3: {
        width: '80%',
        height: 86,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 7,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 4,

    },
    main3l: {
        //  backgroundColor:'green',
        borderRightWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'grey',
        width: '30%',
        height: '60%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    main3r: {
        // backgroundColor:'red',
        width: '60%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 10

    },
    textdis: {
        color: 'grey',
        fontWeight: '700'

    },
    textper: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'

    },
    textval: {
        color: 'red',
        fontWeight: '700'

    },
    main32: {
        //   backgroundColor: 'red',
        height: "30%",
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    main33: {

        height: "70%",
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    maindots: {
        backgroundColor: '#FBEFD2',
        width: 26,
        height: 26,
        borderRadius: 50,
        marginHorizontal: -10
    },
    txt2: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 20
    },
    txt3: {
        color: 'white'
    },
    photodiv: {
        width: 80,
        height: 50,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phot: {
        marginTop: 20,
        width: 65,
        height: 60,

    },
    phot2: {

        width: 44,
        height: 44

    },
    textval2: {
        color: 'grey',
        fontSize: 13,
        paddingLeft: 20
    },
    termsdivmain: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        zIndex: 3,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsdiv: {
        backgroundColor: '#FFC72C',
        width: '80%',
        height: 400,
        marginBottom:100,
        borderRadius:20,
        borderWidth: 3,
        justifyContent:'center',
        alignItems:'center'
    },
    successmain:{ 
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    sucess: {
        backgroundColor: 'white',
        width: '90%',
        height: 200,
   
        justifyContent:'space-evenly',
        alignItems:'center',
        
        borderRadius:10,
        shadowColor: "black",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 8,
    },
    presbtnlog:{
        width:'38%',
         justifyContent:'center',
         alignItems:'center',
         height:'75%',
         borderRadius:4
    },
    textlogout:{
        fontSize:17,
        textTransform:'uppercase',
        fontWeight:'700',
        color:'white'
    }

})