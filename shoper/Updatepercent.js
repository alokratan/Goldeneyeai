import { StyleSheet, Text, View, Pressable,TextInput,  ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { prefers } from './prefpercent';

import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const width2=Dimensions.get('window').width
const height=Dimensions.get('window').height

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;

const Updatepercent = ({ navigation }) => {
    const [success, setSuccess] = useState(false);
    const [select, setSelect] = useState(prefers);

    function save() {
        var abcd = select.map((e) => {
            return [e.id, e.selected]

        })
        // console.log(abcd);
        // alert(abcd)
        
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

            <Text style={{fontSize:25,fontWeight:'700',height:'9%'}}>
                Select Discount Percent
            </Text>

         
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
            <View style={{width:'90%',height:"15%",alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
            <Pressable style={[styles.pre,{backgroundColor:'grey'}]}
                onPress={() => navigation.navigate('Your')}>
                <Text style={styles.txt9}>
                    Cancel
                </Text>
            </Pressable>
            <Pressable style={[styles.pre,{backgroundColor:'green'}]}
                onPress={save}>
                <Text style={styles.txt9}>
                    Update
                </Text>
            </Pressable>
            </View>
        </View>
    )
}

export default Updatepercent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
  


    },
   
    itemcont: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#0004',
        height: '40%',
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
        width: '30%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
    },
    
    flatlisst: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'green',

    },
    flatliss: {
        // backgroundColor: 'red',
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itempress: {
        width: '90%',
        height: 40,
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
        fontWeight: '500',
        fontSize:16
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