import { StyleSheet, Text, Pressable,ToastAndroid, TextInput,Dimensions, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';
 import loginimg from '../assets/icons/loginimg.jpg'
 import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from '../Stylesheets/Styleverify'
const Verifynum = ({navigation}) => {
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef();
    const [correctmpin,setCorrectmpin]=useState(true);
    const [correctphno,setCorrectphno]=useState(true);
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });
    const [phone_number,setPhone_number]=useState('');
    const [success, setSuccess] = useState(false);
    const onChangephone_numberHandler = (phone_number) => {
        setPhone_number(phone_number);
    };
    function  sendeotpfun(){
        pin5Ref.current.blur()
        if(phone_number.toString().length==10){
            ToastAndroid.show('OTP Send Successfully.',2000);
            setCorrectphno(true)
            
        }else{
            // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
            setCorrectphno(false)
        }


    }

    const abcd = { ...otp }

   
function loginfun(){
    var bas = Object.values(abcd)
    const abstr = Number(bas.join(''));
    if(abstr===2580){
        // ToastAndroid.show(`Welcome User, Your Mpin is this ${abstr}`,2000);
        ToastAndroid.show(`Verified Successfully`,1000);
        setCorrectmpin(true)
        setSuccess(true)
        
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('RegisterHome')
        }, 2000);
  
    // console.log(abstr);
    }
    else if(!phone_number){
        ToastAndroid.show('Plese Enter 10 digit mobile number',1000);    
    // console.log(abstr);
    }
    else if(abstr===0){
        ToastAndroid.show('Plese, Enter 4 digit OTP',1000);    
    // console.log(abstr);
    }
    else{
        // ToastAndroid.show(`The OTP you have entered is incorrect:  ${abstr}`,1000);      
        // alert(`The OTP you have entered is incorrect:  ${abstr}`)
        // console.log(abstr);
        setCorrectmpin(false)
    }
   
}
    return (
        <View style={styles.container}>
            {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                    <Text style={{fontSize:26,fontWeight:'900',marginVertical:20,color:'white'}}>
                    Verified Successfully
                    </Text>
                     
                    </View>
                </View> : <View></View>
            }
            <View style={styles.top}>
                <Text style={styles.title}>Verify</Text>
            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>
                <TextInput
                    style={[styles.input,{borderBottomColor:correctphno?'grey':'red'}]}
                    cursorColor="black"
                    keyboardType="number-pad"
                    placeholder="Enter Mobile Number"
                    fontWeight='700'
                    ref={pin5Ref}
                    value={phone_number}
                    onChangeText={onChangephone_numberHandler}
                />
                                {
                                correctphno?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Please Enter 10 Digit Phone Number
                            </Text>
                            
                            }
                <View style={styles.midd31}>

                    <Pressable style={styles.presst}
                        onPress={sendeotpfun}
                    >
                        <View style={styles.camicon}>
                        <MaterialCommunityIcons name="form-textbox-password" size={18} color="black" />

                        </View>
                        <Text style={[styles.txtake, styles.txtake2]}
                        >
                            SEND OTP
                        </Text>
                    </Pressable>
                    <View style={styles.textotp}>

                        <TextInput
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                            ref={pin1Ref}
                            cursorColor="black"
                            maxLength={1}
                            onChangeText={text => {
                                setOtp({ ...otp, 1: text });
                                text && pin2Ref.current.focus();

                            }}
                            keyboardType="number-pad"
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin2Ref}
                            cursorColor="black"
                            maxLength={1}
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
                            cursorColor="black"
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
                            cursorColor="black"
                            
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && pin3Ref.current.focus();

                            }}

                            keyboardType="number-pad"
                            style={[styles.textotpinp,{borderColor:correctmpin?'black':'red'}]}
                     
                            placeholder='0'
                        />
                    </View>
                </View>

                <View style={styles.midd3}>
                {
                                correctmpin?  <Text style={{display:'none'}}>
                                Incorrect MPIN, Please try again..
                            </Text>:<Text style={{color:'red',paddingBottom:10}}>
                                Please enter the correct OTP.
                            </Text>
                            
                            }
                    <Pressable style={styles.txt2}
                        onPress={() => alert("helllo alert")}>
                        <Text style={styles.txt3}>
                            Resend OTP
                        </Text>
                    </Pressable>
                </View>

            </View>
           
            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={loginfun}>
                    <Text style={styles.txt9}>
                       VERIFY
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

export default Verifynum
