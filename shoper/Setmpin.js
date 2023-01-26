import { StyleSheet, Text, Pressable, TextInput, StatusBar, Image, View } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import loginimg from '../assets/icons/loginimg.jpg'
import { MaterialIcons } from '@expo/vector-icons';
const Setmpin = () => {


    return (

        <View style={styles.container}>
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
                        keyboardType="number-pad"
                        placeholder="Enter MPIN (for quick access)"
                        onChangeText={e => console.log(e)}

                    />

                    <FontAwesome5 name="mobile-alt" size={24} color="black" />
                </View>
                <View style={styles.inputdiv}>
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    keyboardType="number-pad"
                    placeholder="Confirm MPIN"
                    onChangeText={e => console.log(e)}
                />

<MaterialIcons name="mobile-friendly" size={24} color="green" />
                </View>

               

    

            </View>

            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={() => alert("helllo prresss")}>
                    <Text style={styles.txt9}>
                        SUBMIT
                    </Text>
                </Pressable>
                
            </View>
        </View>
    )
}

export default Setmpin

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
        height: 600,
        //   backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    midd2: {
        //      backgroundColor: 'grey',
        width: '100%',
        height: 200,
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
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical:10
    },
    input: {
        width: '85%',
        height: 30,
        fontSize: 14,
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