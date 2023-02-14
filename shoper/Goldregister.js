import { StyleSheet, Text, Pressable, Dimensions, TextInput, ToastAndroid, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';
import loginimg from '../assets/icons/registerimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png';
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import {styles} from '../Stylesheets/Styleregister'
import axios from 'axios';
const baseURL='http://13.232.193.117:8000'

const Goldregister = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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
        if (!username.trim() || !email.trim() || !password.trim() || !password2.trim()) {
            alert("* All fields are required");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseURL}/user/register/`, {
                username,
                password,
                password2,
                email,
                gender




            });
            if (response.status === 200) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                // console.log(` You have created: ${JSON.stringify(response.data)}`);
                setTimeout(() => {
                    navigation.navigate('Goldlogin')
                }, 1000);
                setIsLoading(false);
                setUsername('');
                setEmail('');
                setPassword('');
                setPassword2('');
                setGender('');

            } else {
                throw new Error("An error has occurred");
            }
        } catch (error) {
            alert("An error has occurred");
            //   console.log(error)
            setIsLoading(false);
        }
    };

    const [showpd, setShowpd] = useState(true)
    const [showpd2, setShowpd2] = useState(true)
    const [checked, setChecked] = useState();

    function showpdfun() {
        showpd ?
            setShowpd(false) : setShowpd(true)
    }
    function showpdfun2() {
        showpd2 ?
            setShowpd2(false) : setShowpd2(true)
    }
    function loginfun() {
        ToastAndroid.show('Please Wait...', 1000);
        setTimeout(() => {
            navigation.navigate('Goldlogin')
        }, 1000);
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Pressable style={styles.presst}
                        onPress={() => navigation.navigate('Came')}>
                        <View style={styles.camicon}>
                            <Entypo name="camera" size={15} color="black" />
                        </View>
                        <Text style={styles.txtake}>
                            TAKE A SELFIE & UPLOAD
                        </Text>
                    </Pressable>
                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>

                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        placeholder="Username"
                        fontWeight='700'
                        editable={!isLoading}
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
                        editable={!isLoading}
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
                        editable={!isLoading}
                        value={password}
                        secureTextEntry={showpd ? true : false}
                        placeholder="Enter Password"
                        onChangeText={onChangepasswordHandler}
                    />
                    <MaterialCommunityIcons name={showpd ? "eye-off-outline" : "eye-outline"} onPress={showpdfun} size={24} color="black" />
                </View>

                <View style={styles.inputdiv}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={showpd2 ? true : false}
                        cursorColor="black"
                        fontWeight='700'
                        editable={!isLoading}
                        value={password2}
                        placeholder="Enter Confirm Password"
                        onChangeText={onChangepassword2Handler}
                    />
                    <MaterialCommunityIcons name={showpd2 ? "eye-off-outline" : "eye-outline"} onPress={showpdfun2} size={24} color="black" />
                </View>
                <View style={styles.radiobtn}>

                    <RadioButton
                        color='black'
                        value="male"

                        status={checked === 'male' ? 'checked' : 'unchecked'}
                        onPress={onChangegenderHandler}
                    /><Text style={{ fontSize: 17, paddingRight: 20 }}>Male</Text>

                    <RadioButton
                        color='black'
                        value="female"
                        onChangeText={onChangegender2Handler}
                        status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={onChangegender2Handler}
                    /><Text style={{ fontSize: 17 }}>Female</Text>
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
