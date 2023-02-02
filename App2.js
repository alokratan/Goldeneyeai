import { StyleSheet,Dimensions, Text, Image, View ,StatusBar } from 'react-native'
import React, { useState } from 'react'
import slides from './slides'
import AppIntroSlider from 'react-native-app-intro-slider';
import Drawers from './shoper2/Drawers'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

const App2 = () => {
    const [showhom, setShowhom] = useState(true);

    const donebtn = (label) => {
        return (
            <View style={styles.donebt}>
                <Text style={{
               color: 'white',
               fontSize: 20,
               textTransform: 'uppercase',
               fontWeight: '700',
             paddingVertical:14,
             paddingHorizontal:140,
             borderRadius:5,
               backgroundColor:'black',
               letterSpacing: 0.5

                }}>
                    {label}
                </Text>
            </View>
        )
    }

    const skipbtn = (label) => {
        return (
            <View style={styles.skipbt}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                    textTransform: 'uppercase',
                    fontWeight: '700'
                }}>
                    {label}
                </Text>
            </View>
        )
    }
    const nxtbtn = (label) => {
        return (
            <View style={styles.nextbtn}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    textTransform: 'uppercase',
                    fontWeight: '700',
                  paddingVertical:14,
                  paddingHorizontal:140,
                  borderRadius:5,
                    backgroundColor:'black',
                    letterSpacing: 0.5
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (showhom) {
        return (
            <AppIntroSlider
            
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image
                                style={[styles.image, { resizeMode: 'contain' }]}
                                source={item.image}
                            />                      
                        <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )
                }}
                dotStyle={styles.mdots}
                activeDotStyle={styles.dots}
                renderNextButton={() => nxtbtn("Next")}
                showSkipButton
                renderSkipButton={() => skipbtn("Skip")}
                renderDoneButton={() => donebtn("done")}
                bottomButton
                onDone={() => {
                    setShowhom(false);
                }}
            />
        )
    }
    else{
        return (<Drawers/>)
    }
   
}

export default App2

const styles = StyleSheet.create({
    container: {
        flex: 0.65,
        alignItems: 'center',
        justifyContent:'flex-end',
   
     

    },
    image: {
        
        width: 330,
        height: 330,
    },
    title: {
        fontWeight: '900',
        fontSize: 33,
        color: 'black',
        textAlign: 'center',
        marginTop:70,
        height:80,
        // backgroundColor:'green'
    },

    mdots: {

        backgroundColor: '#FFC400',
        width: 16,
        height: 16,
        borderRadius: 10,
       marginBottom:50

    },
    dots: {

        backgroundColor: 'black',
        width: 22,
        height: 22,
        borderRadius: 20,
        marginBottom:50
       
       

    },
    nextbtn:{
        width:'100%',
        // backgroundColor:'green',
        height:60,
        justifyContent:'center',
        alignItems:'center',
      
     
    },
    skipbt:{
        width:'100%',
        // backgroundColor:'red',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
       
    },
    donebt:{
        width:'100%',
        // backgroundColor:'red',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        
        marginBottom:100
    }

})