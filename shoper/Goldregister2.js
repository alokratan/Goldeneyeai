import { StyleSheet, Text, Pressable, TextInput,ToastAndroid, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';
import loginimg from '../assets/icons/registerimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png';
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
const baseUrl = "http://13.126.41.109:8000/";
const baseurl2 = "http://13.126.41.109:8000/user/register/"
const Goldregister = ({ navigation }) => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [profile_pic, setProfile_pic] = useState(null);
  const [image, setImage] = useState(null);
  const [img,setImg]=useState(true);
  const [success, setSuccess] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let resultss = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });
    setProfile_pic(resultss)
    //  console.log(resultss);
   
    if (!resultss.canceled) {
      setImage(resultss.assets[0].uri);
      setImg(false)
      setProfile_pic(resultss)
    }
  };

  


  const onChangeNameHandler = (username) => {
    setUsername(username);
  };
  const onChangepasswordHandler = (password) => {
    setPassword(password);
  };
  const onChangepassword2Handler = (password2) => {
    setPassword2(password2);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangegenderHandler = () => {
    setGender('Male')
    setChecked('male');
  };

  const onChangegender2Handler = () => {
    setGender('Female')
    setChecked('female');
    
  };
  const onSubmitFormHandler = async (event) => {
    if (!username.trim() || !email.trim() || !password.trim() ||!password2.trim() ) {
      alert("* All fields are required");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}user/register/`, {
        username,
        password,
        password2,
        email,
        gender,
        profile_pic

      });
      if (response.status === 200) {
        // alert(` You have created: ${JSON.stringify(response.data)}`);
        setSuccess(true)
        // console.log(` You have created: ${JSON.stringify(response.data)}`);
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('Goldlogin')
        }, 3000);
    
        setUsername('');
        setEmail('');
        setPassword('');
        setPassword2('');
        setGender('');
        
      } else {
        throw new Error("some errors");
      }
    } catch (error) {
      alert("An error has occurred");
    //   console.log(error)

    }
  };

    const [showpd,setShowpd]=useState(true)
    const [showpd2,setShowpd2]=useState(true)
    const [checked, setChecked] = useState();

    function showpdfun(){
        showpd?
        setShowpd(false):setShowpd(true)
    }
    function showpdfun2(){
        showpd2?
        setShowpd2(false):setShowpd2(true)
    }
    function loginfun(){
        ToastAndroid.show('Please Wait...',1000);
        setTimeout(() => {
                navigation.navigate('Goldlogin')
            }, 1000);
    }
    return (
        <View style={styles.container}>
                   {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                    <Text style={{fontSize:26,fontWeight:'900',marginVertical:20,color:'white'}}>
                        Register Successfully
                    </Text>
                     
                    </View>
                </View> : <View></View>
            }
   
            <View style={styles.top}>
                <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Pressable style={styles.presst}
                        onPress={pickImage}>
                        <View style={styles.camicon}>
                            <Entypo name="camera" size={15} color="black" />
                        </View>
                        <Text style={styles.txtake}>
                            TAKE A SELFIE & UPLOAD
                        </Text>
                    </Pressable>
        

                    {
                    img?

                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                        
                    />: image && 
                    <View style={{backgroundColor:'black', borderColor:'#FFC72C',borderWidth:5,borderRadius:100,width:170,height:170,justifyContent:'center',alignItems:'center'}}>
                    <Image
                        style={[styles.image, { width:150,height:150,borderRadius:100,margin:10 }]}
                        source={{ uri: image }}
                        
                    />
                    </View>
                    }
                </View>

                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        placeholder="Username"
                        fontWeight='700'
                        value={username}
                        onChangeText={onChangeNameHandler}
                    />
                    <FontAwesome5 name="user" size={22} color="black" />
                </View>


                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        keyboardType="email-address"
                        placeholder="Email"
                        fontWeight='700'
                    
                        value={email}
                        onChangeText={onChangeEmailHandler}
                    />

                    <MaterialIcons name="mail-outline" size={24} color="black" />
                </View>

                <View style={styles.inputdiv}>
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

                <View style={styles.inputdiv}>
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
                <View style={styles.radiobtn}>
                
                <RadioButton
                color='black'
                    value="male"
                   
                    status={checked === 'male' ? 'checked' : 'unchecked'}
                    onPress={onChangegenderHandler}
                /><Text style={{fontSize:17,paddingRight:20}}>Male</Text>
                  
                <RadioButton
                 color='black'
                    value="female"
                   
                    status={checked === 'female' ? 'checked' : 'unchecked'}
                    onPress={onChangegender2Handler}
                /><Text style={{fontSize:17}}>Female</Text>
            </View>
            </View>
          
            <View style={styles.mediadiv}>
                <Pressable style={styles.pressg}
                    onPress={() => alert("Google Auth")}>
                    <Text style={styles.txt1}>
                        Google
                    </Text>
                    <View style={styles.facebook}>
                        <Image
                            style={[styles.face, { resizeMode: 'contain' }]}
                            source={Google}
                        />
                    </View>
                </Pressable>
                <Pressable style={styles.pressf}
                    onPress={() => alert("Facebook Auth")}>
                    <Text style={styles.txt1}>
                        Facebook
                    </Text>
                    <View style={styles.facebook}>
                        <Image
                            style={[styles.face, { resizeMode: 'contain' }]}
                            source={facebook}
                        />
                    </View>
                </Pressable>
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

export default Goldregister

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    top: {

        //  backgroundColor: 'red',
        width: '100%',
        height: 140,
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    midd: {
        width: '100%',
        height: 460,
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
    inputdiv: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical: 10
    },
    input: {
        width: '85%',
        height: 30,
        fontSize: 18,
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
    pressg: {
        width: 140,
        height: 40,
        backgroundColor: '#EA4235',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pressf: {
        width: 140,
        height: 40,
        backgroundColor: '#3664A2',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        paddingLeft: 10,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },

    facebook: {
        width: 34,
        height: 34,
        marginHorizontal: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderRightColor: '#3664A2',
        justifyContent: 'center',
        alignItems: 'center'

    },
    face: {
        width: 26,
        height: 26
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
        justifyContent: 'center',
        alignItems: 'center'


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
    radiobtn:{
        width:'90%',
      //  backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10,
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