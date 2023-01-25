import { StyleSheet, Text, Button, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';


import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
const Likedis = () => {
    const data = [
        {
            id: 1,
            islike: null,
            dislike: null,
        },
        {
            id: 2,
            islike: null,
            dislike: null,
        },
        {
            id: 3,
            islike: null,
            dislike: null,
        },
        {
            id: 4,
            islike: null,
            dislike: null,
        },
        {
            id: 5,
            islike: null,
            dislike: null,
        },



    ]


    // const [like, setLike] = useState('');
    // const [dislike, setDislike] = useState('')
    const [select, setSelect] = useState(data);
    const likefn = (item) => {
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return {
                    ...val, islike: !val.islike
                }
            }
           
            else{
                return val;
            }
        })
        setSelect(newitem)
    }


    const dislikefn = (item) => {
        const newitem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, dislike: !val.dislike }
            }
            else{
                return val;
            }
        })
        setSelect(newitem)
    }

    return (
        <View style={{ backgroundColor: '#0003', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={select}
                style={styles.main}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View style={{ marginTop: 30 }}>
                        <View style={{
                            marginTop: 20
                        }}>
                            <View style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 20, width: 200, justifyContent: 'space-around', height: 50 }}>
                                <MaterialIcons onPress={() => likefn(item)} name="thumb-up-off-alt" size={40} color={
                                    item.islike ? "#0179F3" : "grey"
                                    // item.dislike?"red":"grey"

                                    
                                    
                                    } />
                                <MaterialIcons onPress={() => dislikefn(item)} name="thumb-down-off-alt" size={40} color={
                                    item.dislike ? "red" : "grey"
                                
                                } />
                            </View>


                        </View>

                    </View>

                }}

            />
            {/* <Text onPress={likefn} style={{ backgroundColor: like ? 'green' : 'white', fontSize: 30 }}>like</Text>
            <Text onPress={dislikefn} style={{ backgroundColor: dislike ? 'red' : 'white', fontSize: 30 }}>dislike</Text>
        */}
        </View>
    )
}

export default Likedis

const styles = StyleSheet.create({})