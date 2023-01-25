import { StyleSheet,ScrollView, Text, View, Button, Pressable, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { data } from "./coupans";

import phot from '../assets/icons/imglogo.jpg'

const HomeBottom = () => {

    const [select, setSelect] = useState(data);
    const [redeemed, setRedeemed] = useState(false);

    console.log(select);

    const like = (item) => {
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return {
                    ...val, islike: !val.islike,dislike:val.null
                }
            }
            else {
                return val;
            }
        })
        setSelect(newitem)

    }

    
    const dislike = (item) => {
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, dislike: !val.dislike,islike:val.null }
            }
            else {
                return val;
            }
        })
        setSelect(newitem)
    }
   
    const isredd = (item) => {
        const newitem = select.map((val) => {            
            if (val.id === item.id) {
                 setRedeemed(true)
                 setTimeout(() => {
                     setRedeemed(false)
                 }, 2000);
                return { ...val, isredeem: !val.isredeem
                   }
            }else {
                return val;
            }
        })
         setSelect(newitem)
    }

    return (


        <View style={styles.container}>

            <Image
                style={styles.phot}
                source={phot}
            />
            <Text style={styles.h2}>
                Namaste</Text>

            <Text style={styles.h4}>Here some surprise coupons for you only</Text>
            {
                redeemed ? <View style={styles.termsdivmain}>

                    <View style={styles.termsdiv}>
                    <Text style={{fontSize:30,fontWeight:'900',marginVertical:20}}>
                        Congratulations!
                    </Text>
                    <Text style={{fontSize:20,fontWeight:'700',marginVertical:20}}>
                        Enjoy Your Discounted Coupon.
                    </Text>
                    <Text style={{width:'80%',backgroundColor:'black',height:2,marginVertical:20}}>
                    
                    </Text>
                    <Text style={{fontSize:20,fontWeight:'700'}}>
                        YOUR REDEEM CODE
                    </Text>
                    <View style={{marginVertical:20,borderStyle:'dashed' , borderWidth:1 ,width:130,height:60,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'700'}}>ZA76AE</Text>
                    </View>
                       
                    </View>
                </View> : <View></View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                data={select}
                style={styles.main}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View style={styles.main2}>
                        <View style={styles.main3}>
                            <View style={styles.maindots}>
                            </View>
                            <View style={styles.main3l}>
                                <Text style={{ fontSize: 14, fontWeight: '700' }}>
                                    {item.shopno}
                                </Text>
                                <View style={styles.photodiv}>
                                    <Image
                                        style={styles.phot2}
                                        source={item.img}
                                    />
                                </View>

                            </View>
                            <View style={styles.main3r}>

                                <Text style={styles.textdis}>
                                    {item.dupto}
                                </Text>
                                <Text style={styles.textper}>
                                    {item.percet}
                                </Text >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: 20 }}>
                                    <Text style={styles.textval}>
                                        {item.valid}
                                    </Text>
                                    <Text style={styles.textval2}>
                                        {item.stepsaway}
                                    </Text>
                                </View>

                            </View>


                            <View style={styles.maindots}>

                            </View>

                        </View>
                        <View style={styles.main32}>

                            <View style={styles.main33}>

                                <MaterialIcons onPress={() => like(item)} name="thumb-up-off-alt" size={30} color={item.islike ? "#0179F3" : "grey"} />
                                <MaterialIcons onPress={() => dislike(item)} name="thumb-down-off-alt" size={30} color={
                                    item.dislike ? "red" : "grey"
                                } />
                            </View>

                            <Pressable
                                style={styles.txt2}
                                onPress={() => isredd(item)
                                }
                                backgroundColor={
                                    item.isredeem ? "#FFC72C" : "black"
                                }
                            >
                                {
                                  item.isredeem?  <Text style={[styles.txt3,{color:'black',fontWeight:'700'}]}>
                                    {item.redcode}
                                </Text>:<Text style={styles.txt3}>
                                  Redeem
                              </Text>
                                }
                                
                            </Pressable>

                        </View>

                    </View>

                }}

            />
            {/* <View style={styles.main3}>
                        <View style={styles.maindots}>

                        </View>
                        <View style={styles.maindots}>

                        </View>

                    </View> */}
            {/* </View>

            </ScrollView> */}
        </View>
    )
}

export default HomeBottom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    h2: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: '900'
    },
    h4: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '700'
    },
    main: {
        backgroundColor: '#FBEFD2',
        marginBottom: '18%',
        width: '100%',

    },
    main2: {
        // backgroundColor: 'green',
        width: '100%',
        height: 170,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderBottomWidth: 2,
        // borderBottomColor: 'white'

    },
    main3: {
        width: '80%',
        height: 86,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 7,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 4,

    },
    main3l: {
        //  backgroundColor:'green',
        borderRightWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'grey',
        width: '30%',
        height: '60%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    main3r: {
        // backgroundColor:'red',
        width: '60%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 10

    },
    textdis: {
        color: 'grey',
        fontWeight: '700'

    },
    textper: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'

    },
    textval: {
        color: 'red',
        fontWeight: '700'

    },
    main32: {
        //   backgroundColor: 'red',
        height: "30%",
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    main33: {

        height: "70%",
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    maindots: {
        backgroundColor: '#FBEFD2',
        width: 26,
        height: 26,
        borderRadius: 50,
        marginHorizontal: -10
    },
    txt2: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 20
    },
    txt3: {
        color: 'white'
    },
    photodiv: {
        width: 80,
        height: 50,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phot: {
        marginTop: 20,
        width: 65,
        height: 60,

    },
    phot2: {

        width: 44,
        height: 44

    },
    textval2: {
        color: 'grey',
        fontSize: 13,
        paddingLeft: 20
    },
    termsdivmain: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        zIndex: 3,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsdiv: {
        backgroundColor: '#FFC72C',
        width: '80%',
        height: 400,
        marginBottom:100,
        borderRadius:20,
        borderWidth: 3,
        justifyContent:'center',
        alignItems:'center'
    }
})