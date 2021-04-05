import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';



export const storeSecureData = async(key, value) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.log(error, "storeData error from secure store")
    }  
  }


  export async function getSecureData(key) {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        console.error(error.message)
    }
}


// Async Storage methods
/////////////////////////////////////////////////////////////////////////////////
export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, value.toString());
    } catch (error) {
        console.error(error.message);
    }
}


export async function storeJsonData(key, value) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error(error.message);
    }
}


export async function getData(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error(error.message)
    }
}


export async function getJsonData(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error(error.message)
    }
}


export async function removeData(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(error.message);
    }
}


export async function removeKey() {
    const keys = ['@events']
    try {
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error(error.message);
    }
}