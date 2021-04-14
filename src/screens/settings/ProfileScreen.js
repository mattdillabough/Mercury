import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity 
} from "react-native";

import colors from "../../config/colors";
import { Screen, IconButton } from "../../components";
import { auth } from "../../firebase/firebase";
import { logout } from "../../firebase/firebase";

import {
  getData,
  removeData,
  removeKey,
  storeData,
  getSecureData,
  storeJsonData, 
  getJsonData
} from "../../utils/cache_handler";
import { addImage, getProfileImg } from '../../utils/api_handler/profileImg';


function ProfileTabScreen({ navigation }) {
  
  const [image, setImage] = useState();

  useEffect(() => {
    fetchImage();
  });

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled !== true){
      setImage(pickerResult.uri);

      const email = await getSecureData("USER");
      storeData(email.toString(), pickerResult.uri);
      return;
    }
    return;
  };

    // Display profileImage from cache if it is available
    // Fetch profileImage from firestore db if it isn't in cache
    // Display default avatar if it is not in the firestore.

    const fetchImage = async() => {

      const email = await getSecureData("USER");

        if ((await getData(email.toString())) !== null) {
          await getData(email.toString())
            .then((data) => {
              setImage(data);
            })
            .catch((error) => console.error(error.message));
        }
        else {
            await getFirebaseImg();
        }
    };

      const getFirebaseImg = async() => {

        if (await getJsonData('@profileImg') !== null){
          await getJsonData('@profileImg')
            .then(data => {
              setImage(data);
            })
            .catch((error) => console.error(error.message))
        }
          
          await getProfileImg().then(data => {
              setImage(data);
              setRefresh(false);
              storeJsonData('@profileImg', data);
          })
          .catch(() => setRefresh(false))
      }

  // Remove event cache data on logout
  async function handleSignOut() {
    try {
      await removeData("@events");
      await removeKey();
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Screen style={styles.container}>
      <View>
        <View style={styles.profileImage}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <IconButton
          style={styles.addButton}
          name="add-circle"
          onPress={openImagePickerAsync}
        />
        
        <Text style={[styles.text]}>M E R C U R Y</Text>
        <Text style={{textAlign: 'center'}}>{auth.currentUser.email}</Text>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            color="black"
            size={22}
          />
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>FT. Bennings, GA</Text>
        </View>
      </View>

      <View style={{paddingBottom: 15}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <MaterialCommunityIcons
            name="account-settings-outline"
            color="white"
            size={20}
          />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSignOut}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: "relative",
    left: 100,
    bottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: colors.black,
    width: 200,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 5
  },

  profileImage: {
    marginTop: 30,
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 20,
    textAlign: 'center'
  },
});

export default ProfileTabScreen;