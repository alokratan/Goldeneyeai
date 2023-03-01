import React, { useState } from 'react';
import { Button,StyleSheet, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
export default function Imagepost() {
  const [image, setImage] = useState(null);

  const sendPhotoToApi = async () => {
    // const formData = new FormData();
    // formData.append('image', image);
    // console.log(formData);
    console.log(image)
    const imagw=JSON.stringify(image)
    console.log(imagw);
      try{
    const response = await axios.post('http://geyeapp.consultit.co.in:8000/selfie/',{
        image:"http://13.232.193.117:8000/profile_pic/Screenshot_1.png",
    }, {
        
        method: 'POST',
        // body: JSON.stringify(image)
    headers: {
      'Content-Type': 'multipart/form-data',
    },
      });
    
    //   const result = await response.json();
    
      console.log(response);
      console.log(result);
  }
  catch(err){
    console.log(err)
  }
 
  };
  

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("fjiahfihihfihiewhf",result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Send photo to API" onPress={sendPhotoToApi} />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0004',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})