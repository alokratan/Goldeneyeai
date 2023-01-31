import { StyleSheet, Text, Pressable, ScrollView, TextInput, ToastAndroid, Image, View } from 'react-native'
import React, { useState,useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import loginimg from '../assets/icons/loginimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { userapi } from '../userapi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Goldlogin = ({ navigation }) => {
    
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [showpd, setShowpd] = useState(true)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phonval, setPhoneval] = useState(true);
    const [passval, setPassval] = useState(true);
    const [termscon, setTermscon] = useState(false);
    const [success, setSuccess] = useState(false);

const alertusername=(text)=>{
    setUsername(text)
    if (text==''){
        setPhoneval(false)    
        
        }
        else{
            setPhoneval(true)  
        }

}
const alertpassword=(text)=>{
    setPassword(text)
    if (text.toString().length<=8){
        setPassval(false)    
        }

        else{
            setPassval(true)  
        }

}
    
    function termfn(){
        setTermscon(false)
    }
    function termfnd(){
        setSelection2(false)
        setTermscon(false)
    }
    function agree() {
        if (isSelected2) {

            setSelection2(false)
        }
        else {
            setSelection2(true);
            setTermscon(true)
           
        }

    }

    function showpdfun() {
        showpd ?
            setShowpd(false) : setShowpd(true)
    }

   
    function loginfun() {
       
        if (username==''){
            setPhoneval(false)    
            ToastAndroid.show('* username may not be blank', 1000)
            }
            else if(password=='' && password.toString().length<=8){
                setPassval(false)
                ToastAndroid.show('Password length must be 8 character', 1000)
            }
            else{

            if (isSelected2) {
                userapi({
                username: username,
                password: password,
              })
                .then(result => {

                //    console.log(result.data.token)
                  if (result.status == 200) {
                    setPhoneval(true)
                    setPassval(true)
                //    AsyncStorage.setItem('AccessToken', result.data.token);
                    ToastAndroid.show('Login Successfully...', 1000)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        navigation.navigate('mpin')
                    }, 1000);
                  }else if(!result.status==200){
             
                    setPhoneval(false)
                    setPassval(false)
                    
                    ToastAndroid.show('Invalid Credentials', 1000)
                    
                  }
                  else{
                    ToastAndroid.show('Please check the login credentials!!!', 1000)
                  }
                
                }).catch(err=>{
                    // console.log(err);
                    ToastAndroid.show('Make Sure Your Server Is Live', 1000)
                })
                
            }
            else{
                ToastAndroid.show('Please accept terms & conditions', 1000)
            }
        }
         
    }
    

    function regisfun() {
        ToastAndroid.show('Please Wait...', 1000);
        setTimeout(() => {
            navigation.navigate('Verify')
        }, 1000);
    }
    return (

        <View style={styles.container}>
            {
                termscon ?
                    <View style={styles.termsdivmain}>

                        <View style={styles.termsdiv}>
                            
                            <View style={{ width: '100%', backgroundColor: '#FFC72C', height: 60,borderBottomWidth:2}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingLeft: 20,paddingTop: 20,}}>
                                Terms & Conditions
                            </Text>

                            </View>
                            <View style={{ width: '100%', height: 370,backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center' }}>
                                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%' }}>
                               
                                    <Text style={{ fontSize: 18, color: '#0009', fontWeight: '400'}}>
                                       Golden Eye AI, Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni iure ducimus voluptatem id tenetur incidunt molestiae. Omnis aperiam odit, earum possimus, alias ex ut deleniti culpa tempora tenetur architecto cupiditate, molestiae enim rerum saepe dolorum illum. Atque fugiat soluta eos eum quos amet quas ab facere accusantium excepturi aspernatur similique quae, consequuntur vel velit quisquam officiis expedita a praesentium dicta quo quis? Velit quidem voluptatibus cupiditate. Nisi dolorem ipsum ut fugit natus dolores dolore tenetur sed eos eligendi, numquam doloremque expedita voluptatibus architecto maiores animi quaerat accusamus delectus debitis exercitationem ratione! Deserunt dolores officia ipsum. Officiis corrupti cumque voluptatibus fuga consectetur sequi recusandae, et itaque dignissimos molestiae vel error doloremque magnam animi voluptate. Tempore beatae natus ducimus soluta nesciunt nemo perferendis labore architecto quia magni nam cum nihil, voluptates aut ullam fugit molestiae et possimus excepturi porro adipisci sequi! Molestias temporibus consequatur omnis deleniti aliquid corporis, possimus voluptate? Suscipit, soluta! Rem quia repellendus minima? Architecto, officiis. Autem unde facilis at aliquam, iste consequatur atque facere nobis ut vel. Assumenda recusandae nesciunt esse cum. Rem minima ipsa, quia porro nisi unde velit at praesentium explicabo? Odio natus magnam commodi eius, laborum error. Ex ut vitae ad quam quae aperiam dolor!
                                    </Text>
                                    
                                </ScrollView>
                            </View>
                            <View style={{justifyContent:'flex-end',flexDirection:'row',alignItems:'center',height:60,backgroundColor:'#fff'}}>
                            <Pressable onPress={termfnd} style={{backgroundColor:'#0002',borderRadius:20,width:100,height:36,justifyContent:'center',alignItems:'center',marginHorizontal:12}}>
                                <Text style={{fontSize:16,fontWeight:'900'}}>
                                    Disagree
                                </Text>
                            </Pressable>
                            <Pressable onPress={termfn} style={{backgroundColor:'#FFC72C',borderRadius:20,width:100,height:36,justifyContent:'center',alignItems:'center',marginRight:16}}>
                                <Text style={{fontSize:16,fontWeight:'900'}}>
                                    Agree
                                </Text>
                            </Pressable>
                        </View>
                        </View>
                    </View>
                    : <View></View>
            }

{
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                    <Text style={{fontSize:26,fontWeight:'900',marginVertical:20,color:'white'}}>
                        Login Successfully
                    </Text>
                     
                    </View>
                </View> : <View></View>
            }
            <View style={styles.top}>
                <Text style={styles.title}>Welcome</Text>
            </View>

            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Text style={styles.title2}>Log in to your account</Text>
                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>

                <View style={[styles.inputdiv, { borderBottomColor: phonval ? 'grey' : 'red' }]}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        keyboardType="email-address"
                        placeholder="Username"
                        fontWeight='700'
                        value={username}
                        onChangeText={text => alertusername(text)}
                    />

                    <FontAwesome5 name="mobile-alt" size={24} color="black" />
                </View>

                {
                    phonval?
                    <Text style={{display:'none'}}>  
                   
                    </Text>:
                     <Text style={{color:'red',width:'84%',marginTop:-5}}>
                       * username may not be blank
                 </Text>

                }

                <View style={[styles.inputdiv, { borderBottomColor: passval ? 'grey' : 'red' }]}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        secureTextEntry={showpd ? true : false}
                        placeholder="Password"
                        value={password}
                        fontWeight='700'
                        onChangeText={text => alertpassword(text)}
                    />
                    <MaterialCommunityIcons name={showpd ? "eye-off-outline":"eye-outline" } onPress={showpdfun} size={24} color="black" />
                </View>
                {

                    passval?
                    <Text style={{display:'none'}}>  
                   
                    </Text>:
                     <Text style={{color:'red',width:'84%',marginTop:-5}}>
                       * Password length must be atleast 8 character
                 </Text>

                }

                <View style={styles.midd3}>

                    <Pressable style={styles.txt2}
                        onPress={() => navigation.navigate('Verify')}
                    >
                        <Text style={styles.txt3}
                        >
                            Forgot Password
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.checkboxContainer}>

                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}>Saved locally</Text>

                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected2}
                        onValueChange={agree}
                        // onPress={agree}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}>I Agree to Terms & Conditions</Text>
                </View>




            </View>
            <View style={styles.mediadiv}>
                <Pressable style={styles.pressg}
                    onPress={() => alert("Google Auth")}
                >
                    <Text style={styles.txt1}
                    >
                        Google
                    </Text><View style={styles.facebook}>

                        <Image
                            style={[styles.face, { resizeMode: 'contain' }]}
                            source={Google}
                        />

                    </View>
                </Pressable>
                <Pressable style={styles.pressf}
                    onPress={() => alert("Facebook Auth...")}
                >
                    <Text style={styles.txt1}
                    >
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
                    onPress={loginfun}
                >
                    <Text style={styles.txt9}>
                        LOGIN
                    </Text>

                </Pressable>
                <View style={styles.buttonn2}>
                    <Text style={styles.texttimer}>
                        Don't have account?
                    </Text>
                    <Pressable style={styles.txt2}
                        onPress={regisfun}>
                        <Text style={styles.ttxt3}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Goldlogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',

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
        width: '100%',
        height: 70,
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
        fontWeight: '900',
        fontSize: 18,

    },
    title3: {
        fontWeight: '700',
        fontSize: 20,

    },

    image: {
        width: 180,
        height: 180
    },
    txt2: {
        color: "white"
        

    },
    txt3: {
        color: "#F5B716",
        width: '100%',
        paddingRight: 30,
        fontWeight: '700',
        textDecorationLine: 'underline',
        // fontStyle:'italic'
        
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
        height: 80,
        // backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
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
    txt1: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
        paddingLeft: 10
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
        height: 200,
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
        fontWeight: '700'
    },
    termsdivmain: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsdiv: {
        backgroundColor: '#fff',
        width: '80%',
        height: 500,
        borderWidth: 3,
        justifyContent:'space-between'
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