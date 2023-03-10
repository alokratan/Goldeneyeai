import React, { useState, useEffect,useCallback, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import imagee from '../assets/adaptive-icon.png'



export default function Camerapp() {
const navigation =useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef(null);
  
 useEffect(()=>{
  
  const permissioncam = async()=>{
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status == 'granted');
    permissioncam();}

 },[1])


  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        console.log("this is uri",data.uri)
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        // const asset = await MediaLibrary.createAssetAsync(image);

        navigation.navigate('Goldregis')
        AsyncStorage.setItem('Accessfileuri', image);
console.log(image);
        // alert('Picture saved! 🎉');
        setImage(null);
       
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {  
    return <View style={styles.accesscamera}>
      <Text style={{fontSize:26}}>No access to camera
      </Text>
      <TouchableOpacity >
        <Text style={{backgroundColor:'black',borderRadius:10 ,color:'white',fontSize:30,padding:10}} >
          Give Permission
        </Text>
      </TouchableOpacity>
      </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.maintopcamera}>
   
      <Text style={{color:'#FFC72C', fontSize:30,fontWeight:'900',width:'100%',textAlign:'center'}}>GOLDENEYE</Text>
      <Image style={{width:50,height:50}} source={imagee}/>
      </View>
      {!image ? (
        
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
        >
          <View>
           
           <TouchableOpacity style={{paddingLeft:10}} onPress={() => {
                setType(
                  type === CameraType.front ? CameraType.back : CameraType.front
                );
              }}>

          <Ionicons name='camera-reverse' color={'grey'} size={40} />

           </TouchableOpacity>
           
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={styles.touchhhmain}
          >
            <TouchableOpacity style={styles.tochbutton} onPress={() => setImage(null)}>
           <Text style={styles.texttouch}>Re-take
            </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tochbutton} onPress={savePicture}>
           <Text style={styles.texttouch}>Upload
            </Text> 
            </TouchableOpacity>



          </View>
        ) : (
          <View style={{flexDirection:'row'}}>
          
          
          <TouchableOpacity style={styles.tochbutton2} onPress={takePicture}>

          <MaterialIcons name='camera' size={80} />
           </TouchableOpacity>
</View>
          
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    marginTop:'10%',
    borderRadius: 10,
  },
  topControls: {
    flex: 3,
  },
  touchhhmain:{
    width:'80%',
    height:'60%',
    backgroundColor:'black',
    justifyContent:'space-around',
    alignItems:'center'
  },
  tochbutton:{
    backgroundColor:'#ffffff',
    width:'80%',
    height:'30%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  tochbutton2:{
    backgroundColor:'#ffffff',
    width:120,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  },
  texttouch:{
    fontSize:20,
    fontWeight:'600',
    textTransform:'uppercase',
  },
  maintopcamera:{
    // backgroundColor:'red',
    width:'100%',
    height:'10%',
    justifyContent:'center',
    alignItems:'center'
  },
  accesscamera:{
    flex:1,
    backgroundColor:'#0004',
    justifyContent:'center',
    alignItems:'center',

  }
});