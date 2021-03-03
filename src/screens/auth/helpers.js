import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      }
    } catch(error) {
        console.log(error.message)
    }
}


export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error.message);
    }
}


export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}