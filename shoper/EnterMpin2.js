import { StyleSheet, Text, Pressable,ToastAndroid,Dimensions, TextInput, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState ,useEffect,useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height
import loginimg from '../assets/icons/loginimg.jpg'

import axios from 'axios';


import { useFocusEffect } from '@react-navigation/native';
const Entermpin2 = ({navigation,route}) => {
    useFocusEffect(
        useCallback(
          () => {
            handleLogin
        AsyncStorage.getItem('AccessToken').then(value=>{
            console.log('mpin',value);
             setTok(value)
        })
        AsyncStorage.getItem('Accessuserid').then(value=>{
            console.log('id',value);
             setTok2(value)
        })
          },
          [],
        )
        
    )
   
    const [tok,setTok]=useState(null);
    const [tok2,setTok2]=useState(null);
    const [correctmpin,setCorrectmpin]=useState(true);
    const [success, setSuccess] = useState(false);
    //  const [mpin,setMpin]=useState('')
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });
    const abcd = { ...otp }
    const handleLogin = async() => {
    const response = await axios.get(`http://13.232.193.117:8000/user/register/${tok2}`);
    var bas = Object.values(abcd)
    const abstr = bas.join('');
    console.log(abstr);
try{
    const response = await axios.post('http://13.232.193.117:8000/user/log-in-mpin/', {
        mpin:abstr,
      },{
          headers:{
              'Authorization':`token ${tok}`
          }
      })
  
    if (response.status === 200) {
   
    //   alert(`.....Welcome User, Your Mpin is this ${abstr}...... `)
      setCorrectmpin(true)
            setSuccess(true)
            console.log(JSON.stringify(response.data));
      ToastAndroid.show('Authentication successfully',2000);
      console.log(otp);
     
    //   setOtp(0)
      setTimeout(() => {
        setSuccess(false)
        
          navigation.navigate('Bottomtabs')
        
      }, 2000);
    }
    else{
    //   alert(`The MPIN you have entered is incorrect:  ${abstr}`)
       console.log(abstr);
      setCorrectmpin(false)
    
      console.log(response.status);
    }
}
   
catch (error) {
    // alert("An error has occurred");
    ToastAndroid.show(`The MPIN you have entered is incorrect`,2000)
    //    console.log(abstr);
      setCorrectmpin(false)
      console.log(error)
    console.log(error)

  }    
    
  console.log("all data",JSON.stringify(response.data.full_name));
  const tokedata=JSON.stringify(response.data)
  console.log('ttt',tokedata);
    AsyncStorage.setItem('AccessTokendata', tokedata);

  };


    return (

        <View style={styles.container}>
                {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                        <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
                            WELCOME
                        </Text>

                    </View>
                </View> : <View></View>
            }
            <View style={styles.top}>

            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>

                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>


                <View style={styles.inputdiv}>
                    <Text style={styles.title}>Enter 4 digit MPIN</Text>
                    <View style={styles.textotp}>

                        <TextInput
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                            ref={pin1Ref}
                            maxLength={1}
                            secureTextEntry
                            onChangeText={text => {
                                setOtp({ ...otp, 1: text });
                                text && pin2Ref.current.focus();

                            }}
                            keyboardType="number-pad"
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin2Ref}
                            maxLength={1}
                            secureTextEntry
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? pin3Ref.current.focus() : pin1Ref.current.focus()

                            }}
                            keyboardType="number-pad"
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin3Ref}
                            maxLength={1}
                            secureTextEntry
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? pin4Ref.current.focus() : pin2Ref.current.focus();
                            }}
                            keyboardType="number-pad"
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin4Ref}
                            maxLength={1}
                            secureTextEntry
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && pin3Ref.current.focus();

                            }}

                            keyboardType="number-pad"
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                            placeholder='0'
                        />
                    </View>
                    
                    <View style={styles.midd3}>
                            {
                                correctmpin?  <Text style={{display:'none'}}>
                                Incorrect MPIN, Please try again..
                            </Text>:<Text style={{color:'red',paddingBottom:20}}>
                                Incorrect MPIN, Please try again..
                            </Text>
                            
                            }
                   
                 
                    <Pressable style={styles.txt2}
                    
                        onPress={() => navigation.navigate('Resetmpin')}>
                        <Text style={styles.txt3}>
                            Forgot MPIN
                        </Text>
                    </Pressable>
                </View>
                 {/* <TextInput
          style={styles.input}
          placeholder="enter mpin"
          value={mpin}
          onChangeText={text => setMpin(text)}
        /> */}

                </View>




                {/* <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}>Saved locally</Text>
                </View> */}



            </View>

            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={() => handleLogin()}>
                    <Text style={styles.txt9}>
                        DONE
                    </Text>
                </Pressable>
                <View style={styles.buttonn2}>
                    <Text style={styles.texttimer}>
                        Back to
                    </Text>
                    <Pressable style={styles.txt2}
                        onPress={() => navigation.navigate('LoginHome')}>
                        <Text style={styles.ttxt3}>
                            LOGIN
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Entermpin2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    midd: {
        width: '100%',
        height: height / 1.6,
       // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    midd3: {
       // backgroundColor: 'grey',
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midd2: {
      //  backgroundColor: 'grey',
        width: '100%',
        height: height / 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 50
    },

    inputdiv: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
    //    backgroundColor: 'grey',

    },
    input: {
        width: '85%',
        height: 30,
        fontSize: 14,

    },
    title: {
        fontWeight: '900',
        fontSize: 22, 
      //  backgroundColor: 'aqua',
        marginVertical:30


    },
    title2: {
        fontWeight: '700',
        fontSize: 17,

    },
    title3: {
        fontWeight: '700',
        fontSize: 22,

    },

    image: {
        width: '50%',
        height: height
    },
    txt2: {
        color: "white",

    },
    txt3: {
        color: "#F5B716",
        width: '100%',
        fontWeight: '700',
        textDecorationLine: 'underline'
    },


    txt1: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 20,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    ttxt3: {
        color: "#F5B716",
        fontWeight: '900',
        fontSize: 17,
        marginHorizontal: 10,
        textDecorationLine: 'underline',
        textTransform: 'uppercase'
    },

    face: {
        width: 26,
        height: 26
    },
    buttonn: {
        width: '100%',
        height: height / 4,
       // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonn2: {
        width: '100%',
        height: '40%',
       // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pre: {
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    texttimer: {
        fontSize: 16,
        fontWeight: '700',

    },

    camicon: {
        backgroundColor: 'white',
        width: 26,
        height: 26,
        borderRadius: 50,
        marginTop: -12,
        marginLeft: -8,
        borderColor: 'black',
        borderWidth: 1


    },
    txtake: {
        color: 'white',
        fontSize: 10,
        fontWeight: '900',
        paddingLeft: 14,
        paddingTop: -23
    },
    txtake2: {
        paddingLeft: 50,
    },

    textotp: {

        width: '50%',
        height: 46,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 14,

    },
    textotpinp: {
        //   backgroundColor:'red',
        height: 40,
        width: 34,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 24,
    },
    successmain: {
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
        backgroundColor: 'green',
        width: '90%',
        height: 100,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 8,
    }

})