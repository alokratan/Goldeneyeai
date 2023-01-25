import { StyleSheet, Text, Pressable, TextInput, KeyboardAvoidingView, View, Image } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome, } from '@expo/vector-icons';
import Dropmultiple from './Multiple2'
import phot from '../assets/icons/imglogo.jpg'
//import DropDownPicker from 'react-native-dropdown-picker'
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, Feather } from '@expo/vector-icons';

import { Switch } from 'react-native-paper';
const YourPro = () => {
    const [hideitem,setHideitem]=useState(false);

    const hidefun=()=>{
        setHideitem(true)
        // setTimeout(() => {
        //     setHideitem(false)
        // }, 3000);
    }
    const  closedrop=()=>{
        setHideitem(false)
    }
    const [visible, setVisible] = useState(false);

    const save = () => {
        console.log();
    };
    const visifun = () => setVisible(true);
    const nonvisifun = () => setVisible(false);


    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior="height"
        >
            {
                hideitem ? <View style={styles.successmain}>
                    <View style={styles.sucess}>
                    <Dropmultiple/>
                    <Pressable onPress={closedrop} style={{justifyContent:'center',alignItems:'center', width:'60%',borderRadius:10,height:40,backgroundColor:'black'}}>
                    <Text style={{color:'white',fontWeight:'700',fontSize:16}}>
                        CLOSE
                    </Text>
                    </Pressable>
                    </View> 
                    </View> : <View></View>
            }
           
            <View style={visible ? styles.header : styles.nonheader} >

                <Image
                    style={styles.phot}
                    source={phot}
                />
                <View style={styles.textandmenudiv}>
                    <Text style={styles.headertxt}>
                        Your Profile
                    </Text>

                    <Pressable style={{ paddingHorizontal: 20, paddingVertical: 20 }}
                        onPress={() => visible ? nonvisifun() : visifun()}>

                        {visible ?
                            <FontAwesome name="angle-up" size={24} color="black" /> :
                            <FontAwesome name="angle-down" size={24} color="black" />
                        }


                    </Pressable>


                </View>

            </View>

            
            {visible ?
            
                <View style={styles.header5}>
            
                    <Pressable style={styles.dropdiv}
                        onPress={() => alert("delete photo")}>
                        <Feather name="camera" size={23} color="black" />
                        <Text style={styles.droptxt}>
                            Take Photo
                        </Text>
                    </Pressable>

                    <Text style={{ width: '80%', height: 1, backgroundColor: '#0013' }}></Text>

                    <Pressable style={styles.dropdiv}
                        onPress={() => alert("delete photo")}>
                        <MaterialCommunityIcons name="image-search-outline" size={24} color="black" />
                        <Text style={styles.droptxt}>
                            Choose Photo
                        </Text>
                    </Pressable>

                    <Text style={{ width: '80%', height: 1, backgroundColor: '#0013' }}></Text>

                    <Pressable style={styles.dropdiv}
                        onPress={() => nonvisifun()}>
                        <Text style={[styles.droptxt, { color: 'blue' }]}>
                            Cancel
                        </Text>
                    </Pressable>
                </View>
                :
                <>
                    <View style={styles.midd3}>
                        <Pressable style={styles.txt2}
                            onPress={() => alert('this is edit button')}>
                            <Text style={styles.ttxt3}>
                                Edit
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.header2}>
                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <FontAwesome5 name="user" size={22} color="black" />
                            </View>
                            <TextInput

                                style={styles.input}
                                placeholder="User Name"
                                cursorColor='black'
                                onChangeText={e => console.log(e)}
                            />
                        </View>
                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <MaterialIcons name="mail-outline" size={24} color="black" />
                            </View>
                            <TextInput
                                style={styles.input}
                                cursorColor='black'
                                placeholder="username123@gmail.com"
                                onChangeText={e => console.log(e)}
                            />
                        </View>
                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <Ionicons name="call-outline" size={24} color="black" />
                            </View>
                            <TextInput
                                cursorColor='black'
                                style={styles.input}
                                placeholder="9932xxxxxx"
                                keyboardType="number-pad"
                                onChangeText={e => console.log(e)}
                            />
                        </View>
                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <Entypo name="star" size={24} color="black" />

                            </View>
                               <Pressable onPress={hidefun} style={{  width: '80%',height:40, backgroundColor:'#F6F6F6',borderBottomColor:'#0004',borderBottomWidth:2  }}>
                                <Text style={{fontSize:15,marginTop:10,paddingLeft:10}}>
                                    -- Select Your Preference --
                                </Text>
                            </Pressable>

                        </View>
                        <View style={styles.inputdiv}>

                            <View style={styles.icondiv}>
                                <FontAwesome5 name="percent" size={16} color="black" />

                            </View>
                            <Pressable style={{  width: '80%',height:40, backgroundColor:'#F6F6F6',borderBottomColor:'#0004',borderBottomWidth:2  }}>
                                <Text style={{fontSize:15,marginTop:10,paddingLeft:10}}>
                                    -- Select Discount Percent --
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.inputdiv}>

                            <View style={styles.icondiv}>
                            <MaterialCommunityIcons name="eye-off-outline" size={24} color="black" />
                            </View>
                            <Pressable  onPress={hidefun} style={{  width: '80%',height:40, backgroundColor:'#F6F6F6',borderBottomColor:'#0004',borderBottomWidth:2  }}>
                                <Text style={{fontSize:15,marginTop:10,paddingLeft:10}}>
                                    -- Hide From Individual --
                                </Text>
                            </Pressable>
                        </View>
                    </View></>}
           {
            visible?<View style={styles.hidebar}>

                
            </View>:
            <View style={styles.hidebar}>

                
            <Text style={styles.txthide}>Hide from all</Text><Switch thumbColor={"black"} value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    
     

           }
            <Pressable style={styles.pre}

                onPress={() => save()}>
                <Text style={styles.txt9}>
                    SAVE CHANGES
                </Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default YourPro;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 100
    },
    header: {
        backgroundColor: '#FFC72C',
        height: 70,
        width: '90%',
        marginTop: -14,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FFC72C'
    },
    nonheader: {
        backgroundColor: '#FFC72C',
        height: 70,
        width: '90%',
        marginTop: '5%',
        borderRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FFC72C'
    },
    textandmenudiv: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header2: {
     //   backgroundColor: 'grey',
        height: 460,
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        marginBottom: 30
    },
    midd3: {
   //  backgroundColor: 'grey',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    ttxt3: {
        color: "#F5B716",
        fontWeight: '500',
        fontSize: 14,
      
        paddingRight:10,
    textDecorationLine: 'underline',

    },
    inputdiv: {
        // backgroundColor: 'red',
        width: '100%',
        height: '18%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '80%',
        marginVertical: 4,
        height: 36,
        fontSize: 16,
        borderBottomColor: '#0004',
        borderBottomWidth: 2,
        paddingLeft: 4
    },
    icondiv: {
        width: 46,
        height: 46,
        backgroundColor: '#0001',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

    phot: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 20,
    },
    headertxt: {
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    pre: {
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },

    hidebar: {
        width: '90%',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,

    },
    txthide: {
        fontSize: 17,
        fontWeight: '700'
    },
    consr: {
        width: '160%',
        position: 'absolute',
        top: 80,
        justifyContent: 'center'
    },
    header5: {
        height: '25%',
        width: '90%',
        borderWidth: 2,
        borderColor: '#0011',
        marginTop: -54,
        position: 'relative',
        zIndex: -1,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '70%',
       // backgroundColor:'red'
    },
    dropdiv: {
        width: '80%',
        height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,


        // backgroundColor:'#0001'
    },
    droptxt: {

        fontSize: 17,
        color: 'black',
        fontWeight: '700',
        paddingLeft: 10
    },
    dropmenuicon: {
        backgroundColor: 'red',

    },
     successmain:{ 
        height: '120%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
  
    sucess: {
        marginTop:100,
        backgroundColor: '#FFC72C',
        width: '90%',
        height: 500,
        borderWidth: 3,
        borderColor:'black',
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