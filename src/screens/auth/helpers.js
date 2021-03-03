import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        return value
      }
    } catch(error) {
        console.log(error.message)
    }
}


export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (error) {
      console.log(error.message);
    }
}