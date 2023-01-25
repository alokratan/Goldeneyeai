import { StyleSheet, Text, Pressable, TextInput, StatusBar, Image, View } from 'react-native'
import React, { useRef, useState } from 'react';
 import loginimg from '../assets/icons/forg.jpg'
 import { Entypo } from '@expo/vector-icons';
 import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Forgotmpin = () => {
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    const abcd = { ...otp }

    
function abcdfun(){
    var bas = Object.values(abcd)

    console.log(bas);
    const abstr= Number(bas.join(''));
    console.log(abstr);

}




    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Forgot MPIN</Text>
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
                    keyboardType="number-pad"
                    cursorColor="black"
                    placeholder="Enter Mobile Number"
                    onChangeText={e => console.log(e)}
                />
      <FontAwesome5 name="mobile-alt" size={24} color="black" />
                </View>
               
                <View style={styles.midd31}>

                    <Pressable style={styles.presst}
                        onPress={() => alert("helllo alert")}
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
                            style={styles.textotpinp}
                            ref={pin1Ref}
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
                            maxLength={1}
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? pin3Ref.current.focus() : pin1Ref.current.focus()

                            }}
                            keyboardType="number-pad"
                            style={styles.textotpinp}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin3Ref}
                            maxLength={1}
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? pin4Ref.current.focus() : pin2Ref.current.focus();
                            }}
                            keyboardType="number-pad"
                            style={styles.textotpinp}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin4Ref}
                            maxLength={1}
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && pin3Ref.current.focus();

                            }}

                            keyboardType="number-pad"
                            style={styles.textotpinp}
                            placeholder='0'
                        />
                    </View>
                </View>

                <View style={styles.midd3}>
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
                    onPress={() => abcdfun()}>
                    <Text style={styles.txt9}>
                       VERIFY
                    </Text>

                </Pressable>
                <View style={styles.buttonn2}>
                    <Text style={styles.texttimer}>
                        Back to
                    </Text>
                    <Pressable style={styles.txt2}
                        onPress={() => alert("helllo alert")}>
                        <Text style={styles.ttxt3}>
                            LOGIN
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Forgotmpin

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
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
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
    inputdiv: {
        flexDirection: 'row',
        width: '86%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical:10
    },
    input: {
        width: '85%',
        height: 30,
        fontSize: 18,
        fontWeight:'700'
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
        paddingLeft: 20,
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
    }

})