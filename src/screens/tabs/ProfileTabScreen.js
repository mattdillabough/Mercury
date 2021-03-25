import React , { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { logout } from '../../firebase/firebase';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

function ProfileTabScreen(props) {
    const [image, setImage] = useState();

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required");
              return;
            }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
          setImage(pickerResult.uri)
    }

    async function handleSignOut() {
      try {
        await logout();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <SafeAreaView style= {styles.container}>
        <View style= {{ alignSelf: "center" }}>
            <View style= {styles.profileImage}>
                <Image  
                    source={{uri: image}} 
                    style={styles.image} 
                    resizeMode="cover"
                />
            </View>
              <View style={styles.addButton}>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Ionicons name="ios-add-circle" size={42} color='white' /> 
                </TouchableOpacity>
              </View>
            <View style= {{alignSelf: "center"}}>
                <Text style = {[styles.text, {top:30}]}>Electric Eagle</Text>
            </View>
            <View style= {{alignSelf: "center"}}>
                <Text style = {[styles.text, {top:30}]}>eEagle@nyc.rr.com</Text>
            </View>
        </View>
            <View style={[styles.row, {alignSelf: "center"}]}>
                <Icon name="map-marker-radius" color="black" size={22}/>
                <Text style={[styles.text]}>Ft. Bennings, GA</Text>
            </View>

            <View style={[styles.buttonContainer, {alignSelf: "center", marginTop: 180}]}>
                <Icon name="account-settings-outline" color="white" size={20}/>
                <Text style={[styles.text, {color:"white"}]}>Settings </Text>
            </View>

            <View style={[styles.buttonContainer, {alignSelf: "center", marginTop: 3}]}>
                <Button title="Logout" color="white" onPress={handleSignOut}/>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      color: 'black',
      fontWeight: "400",
      fontSize: 22
    },

    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },

    nameText: {
      fontSize: 50,
      marginTop: 25,
      justifyContent: "center"

    },

    row: {
      flexDirection: 'row',
      marginTop: 100,
    },

    profileImage: {
      marginTop: 70,
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
    },

    addButton: {
      backgroundColor: "black",
      position: "absolute",
      bottom: 44,
      right: 7,
      width: 40,
      height: 44,
      borderRadius: 21,
      alignItems: "center",
      justifyContent: "center"
    },
    
    buttonContainer: {
      flex: 1,
      flexDirection: 'row', 
      backgroundColor: "black",
      width: 200,
      height: 44,
      borderRadius:20,
      alignItems: "center",
      justifyContent: "center"
    }
})

export default ProfileTabScreen;