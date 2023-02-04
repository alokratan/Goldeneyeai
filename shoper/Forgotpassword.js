import { StyleSheet, Text, Pressable,ToastAndroid, TextInput, StatusBar, Image, View } from 'react-native'
import React,{useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import loginimg from '../assets/icons/loginimg.jpg'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {styles} from '../Stylesheets/Stylesetmpin'
const Forgotpassword = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [showpd,setShowpd]=useState(true)
    const [showpd2,setShowpd2]=useState(true)
    const [passwordval,setPasswordval]=useState(true);



    const onSubmitFormHandler = () => {
        if (!password.trim() && !password2.trim()) {
            ToastAndroid.show('Please Enter Password and Confirm Password', 1000)
            setPasswordval(false)
        }
        else{
        if(password!==password2){
            ToastAndroid.show('Confirm Password does not match.', 1000);
            setPasswordval(false)
        }
        else if(password.toString().length>=6 && password2.toString().length>=6){
        //    console.log(` Your Password Successfully Updated`);
            setPasswordval(true)
            ToastAndroid.show('Your Password Successfully Updated', 1000)
            setTimeout(() => {
                navigation.navigate('Goldlogin')
            }, 1000);
        }
        else{
            ToastAndroid.show('Password must be at least 6 characters', 1000)
        }
        // else{
        //     ToastAndroid.show('Invalid ', 1000)
        // }
    }   
      };
    

    const onChangepasswordHandler = (password) => {
        setPassword(password);
      };
      const onChangepassword2Handler = (password2) => {
        setPassword2(password2);
      };
    function showpdfun(){
        showpd?
        setShowpd(false):setShowpd(true)
    }
    function showpdfun2(){
        showpd2?
        setShowpd2(false):setShowpd2(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Update Password</Text>
            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>
                <View style={[styles.inputdiv, { borderBottomColor: passwordval ? 'grey' : 'grey' }]}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        fontWeight='700'
                        value={password}
                        secureTextEntry={showpd?true:false}
                        placeholder="Enter Password"
                        onChangeText={onChangepasswordHandler}
                    />
                     <MaterialCommunityIcons name={showpd?"eye-off-outline":"eye-outline"} onPress={showpdfun} size={24} color="black" />
                </View>

                <View style={[styles.inputdiv, { borderBottomColor: passwordval ? 'grey' : 'red' }]}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={showpd2?true:false}
                        cursorColor="black"
                        fontWeight='700'
                        value={password2}
                        placeholder="Enter Confirm Password"
                        onChangeText={onChangepassword2Handler}
                    />
            <MaterialCommunityIcons name={showpd2?"eye-off-outline":"eye-outline"} onPress={showpdfun2} size={24} color="black" />
           </View>
            </View>

            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={onSubmitFormHandler}>
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

export default Forgotpassword

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#ffffff'
//     },
//     top: {

//         //  backgroundColor: 'red',
//         width: '100%',
//         height: 140,
//         justifyContent: 'flex-end',
//         alignItems: 'baseline'
//     },
//     midd: {
//         width: '100%',
//         height: 600,
//         //   backgroundColor: 'red',
//         justifyContent: 'flex-start',
//         alignItems: 'center'
//     },

//     midd2: {
//         //      backgroundColor: 'grey',
//         width: '100%',
//         height: 200,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         marginBottom: 50
//     },

//     inputdiv: {
//         flexDirection: 'row',
//         width: '90%',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         borderBottomColor: 'grey',
//         borderBottomWidth: 2,
//         marginVertical: 10
//     },
//     input: {
//         width: '85%',
//         height: 30,
//         fontSize: 18,
//     },
//     title: {
//         fontWeight: '900',
//         fontSize: 22,
//         marginBottom: 30,
//         marginLeft: 20
//     },
//     title2: {
//         fontWeight: '700',
//         fontSize: 17,

//     },
//     title3: {
//         fontWeight: '700',
//         fontSize: 22,

//     },

//     image: {
//         width: 180,
//         height: 180
//     },
//     txt2: {
//         color: "white",

//     },
//     txt3: {
//         color: "#F5B716",
//         width: '100%',
//         fontWeight: '700',
//         textDecorationLine: 'underline'
//     },


//     txt1: {
//         color: 'white',
//         fontSize: 17,
//         paddingLeft: 20,
//         fontWeight: '700'
//     },
//     txt9: {
//         color: 'white',
//         fontSize: 17,
//         fontWeight: '700'
//     },

//     face: {
//         width: 26,
//         height: 26
//     },
//     buttonn: {
//         width: '100%',
//         height: 170,

//         justifyContent: 'center',
//         alignItems: 'center'

//     },
//     buttonn2: {
//         width: '100%',
//         height: 70,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'flex-end'

//     },
//     pre: {
//         backgroundColor: 'black',
//         width: '90%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,

//     },
//     texttimer: {
//         fontSize: 16,
//         fontWeight: '700',

//     },

//     camicon: {
//         backgroundColor: 'white',
//         width: 26,
//         height: 26,
//         borderRadius: 50,
//         marginTop: -12,
//         marginLeft: -8,
//         borderColor: 'black',
//         borderWidth: 1


//     },
//     txtake: {
//         color: 'white',
//         fontSize: 10,
//         fontWeight: '900',
//         paddingLeft: 14,
//         paddingTop: -23
//     },
//     txtake2: {
//         paddingLeft: 50,
//     },
//     textotp: {
//         //  backgroundColor:'red',
//         width: '50%',
//         height: 46,
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         flexDirection: 'row',
//         paddingLeft: 14,

//     },
//     textotpinp: {

//         height: 40,
//         width: 34,
//         borderRadius: 5,
//         borderWidth: 1.5,
//         borderColor: 'black',
//         textAlign: 'center',
//         fontSize: 24,
//     }

// })