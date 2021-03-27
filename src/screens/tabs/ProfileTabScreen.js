import React , { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity 
} from 'react-native';

import colors from '../../config/colors';
import { Screen } from '../../components';
import { logout } from '../../firebase/firebase';
import { removeData, removeKey } from '../../utils/cache_handler';

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
            await removeData('@events');
            await removeKey();
            await logout();
        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
    <Screen>
      <View style= {styles.containerTop}>

        <View style= {styles.profileImage}>
          <Image  
            source={{uri: image}} 
            style={styles.image} 
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={openImagePickerAsync}>
          <MaterialCommunityIcons 
            name="plus-circle" 
            size={30} 
            color={colors.black} 
          /> 
        </TouchableOpacity>

          
        <Text style = {[styles.text, {top:30, textAlign: 'center'}]}>Electric Eagle</Text>
        <Text style = {[styles.text, {top:30, textAlign: 'center'}]}>eEagle@nyc.rr.com</Text>
      </View>


      <View style={styles.location}>
        <MaterialCommunityIcons
          name="map-marker-radius" 
          color="black" 
          size={22}
        />
        <Text style={styles.text}>Ft. Bennings, GA</Text>
      </View>

      <View style={[styles.buttonContainer, {alignSelf: "center", marginTop: 180}]}>
        <MaterialCommunityIcons 
          name="account-settings-outline" 
          color="white" 
          size={20}
        />
        <Text style={[styles.text, {color:"white"}]}>Settings </Text>
      </View>

      <TouchableOpacity style={[styles.buttonContainer, {alignSelf: 'center', marginTop: 10}]}>
        <Text 
          style={{color: colors.white, fontSize: 20}} 
          onPress={handleSignOut}
          >Logout
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
    containerTop: {
      alignSelf: 'center',
    },
    text: {
      color: colors.black,
      fontWeight: "400",
      fontSize: 20
    },
    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
    location: {
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: 100,
    },
    profileImage: {
      marginTop: 70,
      width: 130,
      height: 130,
      borderRadius: 100,
      overflow: "hidden",
      alignSelf: 'center'
    },
    addButton: {
      position: "absolute",
      bottom: 44,
      right: 7,
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center"
    },   
    buttonContainer: {
      flexDirection: 'row', 
      backgroundColor: colors.black,
      width: 200,
      height: 44,
      borderRadius:10,
      alignItems: "center",
      justifyContent: "center"
    }
})

export default ProfileTabScreen;