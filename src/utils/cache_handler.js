import AsyncStorage from '@react-native-async-storage/async-storage';

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
        const jsonValue = await AsyncStorage.getItem(key)
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