import * as SecureStore from 'expo-secure-store';


export const storeData = async(key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log(error, "storeData error from secure store")
  }  
}


export const getData = async(key) => {
  try {
    
    let value = await SecureStore.getItemAsync(key);
    return value;

  } catch (error) {
    console.log(error, "getData error from secure store")
  }
}