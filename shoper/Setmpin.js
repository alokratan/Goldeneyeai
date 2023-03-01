import { StyleSheet, Text,Dimensions, Pressable, TextInput, StatusBar, Image, View } from 'react-native'
import React, { useState,useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import loginimg from '../assets/icons/loginimg.jpg'
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import {styles} from '../Stylesheets/Stylesetmpin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setmpin = ({navigation}) => {
    const [tok,setTok]=useState(null);
    useEffect(()=>{
        AsyncStorage.getItem('AccessToken').then(value=>{
            console.log('this console',value);
             setTok(value)
         })
            console.log('value',tok);
    },[])
      


    const [mpin,setMpin]=useState('');
    const [confirm_mpin,setConfirm_mpin]=useState('');
    const [mpinval,setMpinval]=useState(true);
    const [success, setSuccess] = useState(false);
    const [icon,setIcon]=useState('white')
    const onchangempin=(mpin)=>{
        setMpin(mpin)
    }
    const onchangeconfirm_mpin=(confirm_mpin)=>{
        setConfirm_mpin(confirm_mpin)
        if(mpin==confirm_mpin){
            setMpinval(true)
            setIcon('green')
        }
        else{
        setMpinval(false)
    setIcon('white')
       
        }
       
    }

    const onsubmit=async ()=>{
        if (!mpin.trim() || !confirm_mpin.trim() ) {
            alert("* All fields are required");
            return;
          }
      
          try {
            const response = await axios.post('http://geyeapp.consultit.co.in:8000/user/set-mpin/', {
              mpin,
              confirm_mpin,
            },{
                headers:{
                    'Authorization':`token ${tok}`
                }
            });
            if (response.status === 200) {
              // alert(` You have created: ${JSON.stringify(response.data)}`);
              setSuccess(true)
               console.log(` You have created: ${JSON.stringify(response.data)}`);
              setTimeout(() => {
                  setSuccess(false)
                //   navigation.navigate('Bottomtabs')
              }, 3000);
          
              setMpin('');
              setConfirm_mpin('');
            
              
            } else {
              throw new Error("some errors");
            }
          } catch (error) {
            
            console.log(error)
      
          }

        if(mpin==confirm_mpin){
            
        setMpin(null)
        setConfirm_mpin(null)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                navigation.navigate('LoginHome')
            }, 2000);
        }
  
    }

    return (

        <View style={styles.container}>
               {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                    <Text style={{fontSize:24,fontWeight:'900',marginVertical:20,color:'white'}}>
                        MPIN Generated Successfully
                    </Text>
                     
                    </View>
                </View> : <View></View>
            }
            <View style={styles.top}>
                <Text style={styles.title}>Set MPIN</Text>
            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>

                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>


                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        maxLength={4}
                        keyboardType="number-pad"
                        value={mpin}
                        placeholder="Enter MPIN (for quick access)"
                        onChangeText={onchangempin}

                    />

                    <FontAwesome5 name="mobile-alt" size={24} color="black" />
                </View>
                <View style={[styles.inputdiv, { borderBottomColor: mpinval ? 'grey' : 'red' }]}>
                <TextInput
                    style={styles.input}
                    maxLength={4}
                    cursorColor="black"
                    value={confirm_mpin}
                    keyboardType="number-pad"
                    placeholder="Confirm MPIN"
                    onChangeText={onchangeconfirm_mpin}
                />

<MaterialIcons name="mobile-friendly" size={24} color={icon} />
            
                </View>
                {
                                mpinval?  <Text style={{display:'none'}}>
                               
                            </Text>:<Text style={{color:'red',paddingBottom:20,width:'85%'}}>
                                 MPIN not match
                            </Text>
                            
                            }


            </View>

            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={onsubmit}>
                    <Text style={styles.txt9}>
                        SUBMIT
                    </Text>
                </Pressable>              
                <View style={styles.buttonn2}>
                    <Text style={styles.texttimer}>
                        Back to
                    </Text>
                    <Pressable style={styles.txt2}
                        onPress={()=>navigation.navigate('LoginHome')}>
                        <Text style={styles.ttxt3}>
                            LOGIN
                        </Text>
                    </Pressable>
                </View>
            </View>
           
        </View>
    )
}

export default Setmpin
