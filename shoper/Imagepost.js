import React, { useState } from 'react';
import { Button,StyleSheet, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
export default function Imagepost() {
  const [image, setImage] = useState(null);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri)
    }
  }
  
  const anotherf =()=>{
    uploadImage(image);
  }

  async function uploadImage(uri) {
    let formData = new FormData();
    formData.append('full_name',"alok ji ratan")
    formData.append('username',"alok000")
    formData.append('email',"alok23@gmail.com")
    formData.append('password',"password")
    formData.append('password2',"password")
    formData.append('gender',"Male")
    formData.append('profile_pic', {
      uri,
      name: 'profile_pic.jpg',
      type: 'image/jpeg',
    });
  console.log(formData)
    try {
      let response = await axios.post('http://13.232.193.117:8000/user/register/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Upload DATA" onPress={anotherf} />
      {/* {image && <Image source={{ uri }} style={{ width: 200, height: 200 }} />}
      <Button title="Send photo to API" onPress={uploadImage} /> */}
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