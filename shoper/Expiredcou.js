import { StyleSheet, Text,Button, View, Image, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { data } from "./coupans"
import phot from '../assets/icons/imglogo.jpg'

const Expiredcou = () => {
    
    return (
        <View style={styles.container}>
            {/* <Ionicons name="home-outline" size={24} color="black" /> */}
            <View style ={styles.expired}>
            <View style={styles.main322}>
                            <View style={styles.maindots22}>
                        </View>
                        <Text style={{color:'white', fontSize:16 ,letterSpacing:1 , fontWeight:'500'}}>EXPIRED</Text>
                            <View style={styles.maindots22}>
                        </View>
            </View>
            </View>
           
            {/* <ScrollView style={styles.main}>
                <View style={styles.main2}> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                style={styles.main}
                renderItem={({ item }) => {
                    return <View style={styles.main2}>
                        <View style={styles.main3}>
                            <View style={styles.maindots}>
                            </View>
                            <View style={styles.main3l}>
                                <Text  style={{fontSize:14,fontWeight:'700'}}>
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
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end',height:20}}>
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
                            <Text style={styles.txt3}>
                                Expired few days ago
                            </Text>

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
export default Expiredcou
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
        height: 150,
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
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 6,
    },
    main322: {
        width: '80%',
        height: 36,
        backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: {
            width: 7,
            height: 2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 6,
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
        //backgroundColor:'red',
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
         //  backgroundColor: 'green',
        height: "22%",
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    main33: {
       // backgroundColor:'red',
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
    maindots22: {
        backgroundColor: 'white',
        width: 16,
        height: 16,
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
        color: 'red',
        fontStyle:'italic',
        fontWeight:'500'
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
    textval2:{
        color:'grey',
        fontSize:13,
        paddingLeft:20
    },
    expired:{
        // backgroundColor:'green',
        // borderWidth:1,
        width:120,
        height:120,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    }
})