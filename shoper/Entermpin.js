import { StyleSheet, Text, Pressable, ToastAndroid, TextInput, Image, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import loginimg from '../assets/icons/loginimg.jpg'
import { StatusBar, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Entermpin = ({ navigation }) => {
    const [correctmpin, setCorrectmpin] = useState(true);
    const [success, setSuccess] = useState(false);
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    const abcd = { ...otp }


    function abcdfun() {
        var bas = Object.values(abcd)
        const abstr = Number(bas.join(''));
        if (abstr === 2580) {
            ToastAndroid.show(`Welcome User, Your Mpin is this ${abstr}`, 2000);
            setCorrectmpin(true)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                navigation.navigate('Bottomtabs')
            }, 3000);

             console.log(abstr);
        }
        else if (abstr == 0) {
            ToastAndroid.show('Plese, Enter 4 digit MPIN', 1000);

        }
        else {
            // alert(`The MPIN you have entered is incorrect:  ${abstr}`)
            // console.log(abstr);
            setCorrectmpin(false);

        }




    }
    useEffect(() => {
        abcdfun();
    }, [])


    return (

        <View style={styles.container}>
            {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                        <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
                            Great!
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
                            style={[styles.textotpinp, { borderColor: correctmpin ? 'black' : 'red' }]}
                            ref={pin1Ref}
                            secureTextEntry={true}
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
                            secureTextEntry={true}
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? pin3Ref.current.focus() : pin1Ref.current.focus()

                            }}
                            keyboardType="number-pad"
                            style={[styles.textotpinp, { borderColor: correctmpin ? 'black' : 'red' }]}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin3Ref}
                            secureTextEntry={true}
                            maxLength={1}
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? pin4Ref.current.focus() : pin2Ref.current.focus();
                            }}
                            keyboardType="number-pad"
                            style={[styles.textotpinp, { borderColor: correctmpin ? 'black' : 'red' }]}
                            placeholder='0'
                        />
                        <TextInput
                            ref={pin4Ref}
                            maxLength={1}
                            secureTextEntry={true}
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && pin3Ref.current.focus();

                            }}

                            keyboardType="number-pad"
                            style={[styles.textotpinp, { borderColor: correctmpin ? 'black' : 'red' }]}
                            placeholder='0'
                        />
                    </View>

                    <View style={styles.midd3}>
                        {
                            correctmpin ? <Text style={{ display: 'none' }}>
                                Incorrect MPIN, Please try again..
                            </Text> : <Text style={{ color: 'red', paddingBottom: 20 }}>
                                Incorrect MPIN, Please try again..
                            </Text>

                        }


                        <Pressable style={styles.txt2}

                            onPress={() => alert("helllo alert")}>
                            <Text style={styles.txt3}>
                                Forgot MPIN
                            </Text>
                        </Pressable>
                    </View>

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
                    onPress={() => abcdfun()}>
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

export default Entermpin

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