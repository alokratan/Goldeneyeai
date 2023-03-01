import { StyleSheet, Text, Pressable, TextInput, StatusBar, Image, View } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import loginimg from '../assets/icons/loginimg.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import {styles} from '../Stylesheets/Stylesetmpin';
const Setmpin2 = ({navigation}) => {
    const [mpin,setMpin]=useState('');
    const [mpin2,setMpin2]=useState('');
    const [mpinval,setMpinval]=useState(true);
    const [success, setSuccess] = useState(false);
    const [icon,setIcon]=useState('white')
    const onchangempin=(mpin)=>{
        setMpin(mpin)
    }
    const onchangempin2=(mpin2)=>{
        setMpin2(mpin2)
        if(mpin==mpin2){
            setMpinval(true)
            setIcon('green')

        }
        else{
  
        setMpinval(false)
        setIcon('white')
        }
       
    }
    const onsubmit=()=>{
        setMpin(null)
        setMpin2(null)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('LoginHome')
        }, 2000);
    }

    return (

        <View style={styles.container}>
               {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                    <Text style={{fontSize:24,fontWeight:'900',marginVertical:20,color:'white'}}>
                        MPIN Updated Successfully
                    </Text>
                     
                    </View>
                </View> : <View></View>
            }
            <View style={styles.top}>
                <Text style={styles.title}>Reset MPIN</Text>
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
                        maxLength={4}
                        keyboardType="number-pad"
                        value={mpin}
                        placeholder="Enter MPIN (for quick access)"
                        onChangeText={onchangempin}

                    />

                    <FontAwesome5 name="mobile-alt" size={24} color="black" />
                </View>
                <View style={[styles.inputdiv, { borderBottomColor: mpinval ? 'grey' : 'red' }]}>
                <TextInput
                    style={styles.input}
                    maxLength={4}
                    cursorColor="black"
                    value={mpin2}
                    keyboardType="number-pad"
                    placeholder="Confirm MPIN"
                    onChangeText={onchangempin2}
                />

<MaterialIcons name="mobile-friendly" size={24} color={icon} />
               
                        
                </View>
                {
                                mpinval?  <Text style={{display:'none'}}>
                               
                            </Text>:<Text style={{color:'red',paddingBottom:20,width:'85%'}}>
                              MPIN not match
                            </Text>
                            
                            }

               

    

            </View>

            <View style={styles.buttonn}>
                <Pressable style={styles.pre}
                    onPress={onsubmit}>
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

export default Setmpin2
