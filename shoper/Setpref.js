import { StyleSheet, Text, View, Pressable, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { prefers } from './prefdata';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, ScrollView } from 'react-native';

import ass from '../assets/icons/adidas.png'
import ass1 from '../assets/icons/bata.png'
import ass2 from '../assets/icons/domi.png'
import ass3 from '../assets/icons/rebook.png'
import ass4 from '../assets/icons/mcdd.png'
import logg1 from '../assets/icons/eye.png'
import special from '../assets/icons/special.jpeg'
const width2=Dimensions.get('window').width
const height=Dimensions.get('window').height
const arrimg = [
    {
        id:0,
       image: ass,
       logo:logg1,
       text:'Discount Upto 35%'
    },
    {
        id:1,
       image: ass1,
       logo:logg1,
       text:'Discount Upto 20%'
    },
    {
        id:2,
       image: ass2,
       logo:logg1,
       text:'Discount Upto 45%'
    },
    {
        id:3,
       image: ass3,
       logo:logg1,
       text:'Discount Upto 20%'
    },
    {
        id:4,
       image: ass4,
       logo:logg1,
       text:'Discount Upto 35%'
    }
   
]

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;

const Setpref = ({ navigation }) => {
    const [success, setSuccess] = useState(false);
    const [select, setSelect] = useState(prefers);

    function save() {
        var abcd = select.map((e) => {
            return [e.id, e.selected]

        })
        // console.log(abcd);
        // alert(abcd)
        ToastAndroid.show('Your prefernces has been saved for future', 1000);
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('Your')
        }, 2000);


    }
    const like = (item) => {

        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            }
            else {
                return val;
            }
        })
        setSelect(newitem)

    }
    return (
        <View style={styles.container}>
        {
            success ? <View style={styles.successmain}>

                <View style={styles.sucess}>
                    <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
                        Updated Successfully
                    </Text>

                </View>
            </View> : <View></View>
        }


            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                snapToInterval={itemWidth + gap}>
                {arrimg.map((abc,id) => (
                    <View key={id} style={styles.item}>
                        <View style={{flexDirection:'row',width:'96%',height:'94%',backgroundColor:'white'}}>

                    
                        <View style={styles.brandmain}>
                            <Image source={abc.logo} style={{width:'50%',height:'20%',marginBottom:5}} />
                            <Text style={{fontSize:13,fontWeight:'700',marginVertical:8}}>GOLDEN EYE</Text>
                            <Image source={special} style={{width:'40%',height:'30%',borderRadius:10}} />
                        </View>
                        <View style={styles.brandmain2}>
                            <Image source={abc.image} style={styles.brand} />
                            <View style={{width:'80%',backgroundColor:'green',height:30,borderRadius:8,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'white',fontWeight:'500'}}>
                                    {abc.text}
                                </Text>
                            </View>
                        </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            {/* <View style={styles.serchdiv}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    onChangeText={e => console.log(e)}
                />
                <Ionicons name="md-search-sharp" size={24} color="black" />
            </View> */}
            <View style={styles.itemcont}>
                <FlatList
                    data={select}
                    style={styles.flatlisst}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <View style={styles.flatliss}><Pressable onPress={() => like(item)} backgroundColor={item.selected ? "#FFC72C" : "#0002"} style={[styles.itempress]}>
                            <Text style={styles.txtit}>{item.itemname}</Text><AntDesign name="checkcircle" size={item.selected ? 24 : 20} color={item.selected ? "green" : "#0004"} />
                        </Pressable></View>

                    }}
                />
            </View>
            <Pressable style={styles.pre}
                onPress={() => save()}>
                <Text style={styles.txt9}>
                    SAVE
                </Text>
            </Pressable>
        </View>
    )
}

export default Setpref

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100


    },
    serchdiv: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#0004',
        height: '6%',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemcont: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#0004',
        height: '54%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30



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
        marginTop: '15%'
    },
    input: {
        width: '80%',
        height: '100%',
        //backgroundColor:'red',
        fontSize: 16
    },
    flatlisst: {
        width: '90%',
        height: '100%',

    },
    flatliss: {
        width: '100%',
        height: 42,
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itempress: {
        width: '90%',
        height: 38,
        //  backgroundColor: '#FFC72C',
        borderRadius: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        marginBottom: 2,
        paddingHorizontal: 10
    },
    txtit: {
        color: 'black',
        fontWeight: '500'
    },
    successmain: {
        height: '110%',
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
        marginBottom: 100,
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
    },
    scrollView: {
        paddingLeft: gap * 2,
        paddingRight: gap,
        alignItems: 'center',
    },
    item: {
        height: itemWidth - 140,
        width: itemWidth,
        backgroundColor: '#0004',
        marginRight: gap,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection:'row'
    },
    brand: {
       
        width: '40%',
        height:'50%',
        borderRadius: 10,


    },
    brandmain:
    {
        width: '35%',
        borderRightWidth:4,
        borderColor:'#0004',
        height: '100%',
         backgroundColor: '#0001',
        justifyContent:'center',

        alignItems:'center'
    },
    brandmain2:
    {
        width: '65%',
        height: '100%',
        // backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center'
    }


})