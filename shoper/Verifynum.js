import { StyleSheet, Text, Pressable,ToastAndroid, TextInput, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';

 import loginimg from '../assets/icons/loginimg.jpg'
 import { MaterialCommunityIcons } from '@expo/vector-icons';
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
            navigation.navigate('Goldregis2')
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
                        onPress={loginfun}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#ffffff'
    },
    top: {

     //   backgroundColor: 'red',
        width: '100%',
        height: 140,
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    midd: {
        width: '100%',
        height: 580,
        // backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    midd2: {
        // backgroundColor: 'grey',
        width: '100%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    midd3: {
        // backgroundColor: 'grey',
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    midd31: {
        //  backgroundColor: 'grey',
        width: '90%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',

    },
    midd4: {
        backgroundColor: 'white',
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkboxContainer: {
        width: '100%',
        // backgroundColor:'black',
        height: 40,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkbox: {
        width: 25,
        height: 25,
        margin: 10,
        borderRadius: 5
    },
    input: {

        width: '85%',
        marginVertical: 4,
        height: 36,
        fontSize: 18,
        // borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingLeft: 4
    },
    title: {
        fontWeight: '900',
        fontSize: 22,
        marginBottom: 30,
        marginLeft: 20
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
        width: 180,
        height: 180
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
    ttxt3: {
        color: "#F5B716",
        fontWeight: '900',
        fontSize: 17,
        marginHorizontal: 10,
        textDecorationLine: 'underline',
        textTransform: 'uppercase'
    },
    mediadiv: {
        width: '100%',
        height: 100,

        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
  
    presst: {
        width: 140,
        height: 40,
        backgroundColor: '#000000',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
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

   
   
    buttonn: {
        width: '100%',
        height: 170,

        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonn2: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'

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
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center'


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
        //  backgroundColor:'red',
        width: '50%',
        height: 46,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 14,

    },
    textotpinp: {

        height: 40,
        width: 34,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 24,
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
        backgroundColor: '#0B7B00',
        width: '90%',
        height: 100,
        borderWidth: 3,
        borderColor:'white',
        justifyContent:'center',
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
    }

})