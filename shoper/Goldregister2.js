import { StyleSheet, Text, Pressable, TextInput,ToastAndroid, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';

import {styles} from '../Stylesheets/Styleregister'
import loginimg from '../assets/icons/registerimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png';
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userapi2 } from '../userapi';
const baseURL='http://13.232.193.117:8000'

const Goldregister = ({ navigation }) => {
    const [full_name, setFull_name] = useState("");
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
   
    if (!resultss.canceled) {
      setImage(resultss.assets[0].uri);
      setImg(false)
      setProfile_pic(resultss)
    }
  };



  const onChangeNameHandler = (full_name) => {
    setFull_name(full_name);
  };
  const onChangeuserNameHandler = (username) => {
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
  const onSubmitFormHandler = async () => {
    if (!full_name.trim() || !username.trim() || !email.trim() || !password.trim() ||!password2.trim() ) {
      alert("* All fields are required");
      return;
    }


//     const formData=new FormData();
//     formData.append('image',{
//         uri:image,
//         type:'image/jpeg',
//         name:'image.jpg',
//     });
//     const config ={
//         headers:{
//             'Content-Type':'multipart/form-data',
    
//         },
// };
    



    try {
      
      const response = await axios.post(`${baseURL}/user/register/`,{
        full_name,
        username,
        password,
        password2,
        email,
        gender,
        //  profile_pic

      });
      if (response.status === 200) {
        // alert(` You have created: ${JSON.stringify(response.data)}`);
        setSuccess(true)
        AsyncStorage.setItem('AccessToken', response.data.token);
         console.log(` You have created: ${JSON.stringify(response.data)}`);
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('Setmpin')
        }, 3000);
    setFull_name('');
        setUsername('');
        setEmail('');
        setPassword('');
        setPassword2('');
         setGender('');
        
      } else {
        throw new Error("some errors");
      }
    } catch (error) {
      console.log(error)
      console.log(error)
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
                navigation.navigate('LoginHome')
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
                </View> :
                 <View></View>
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
                        placeholder="Enter Full Name"
                        fontWeight='700'
                        value={full_name}
                        onChangeText={onChangeNameHandler}
                    />
                          <FontAwesome5 name="user" size={22} color="black" />
                </View>
                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        placeholder="Username"
                        fontWeight='700'
                        value={username}
                        onChangeText={onChangeuserNameHandler}
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
                    value="Male"
                   
                    status={checked === 'male' ? 'checked' : 'unchecked'}
                    onPress={onChangegenderHandler}
                /><Text style={{fontSize:17,paddingRight:20}}>Male</Text>
                  
                <RadioButton
                 color='black'
                    value="Female"
                   
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
