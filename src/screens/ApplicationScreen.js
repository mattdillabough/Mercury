import React from 'react';
import { 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  View
} from 'react-native';

import { Screen } from '../components';

const modules = [
  {id: 1, value: 'Schedule'},
  {id: 2, value: 'Medical' },
  {id: 3, value: 'COVID-19' }
];
const numColumns = 2;

function ApplicationScreen({ navigation }) {

  function formatData(data, numColumns){
    const totalRows = Math.floor(data.length / numColumns)
    let totalLastRow = modules.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      modules.push({id: 0, value: ''})
      totalLastRow++
    }
    return modules
  }


  
  return (
    <View style={styles.container}>
      <FlatList
        data={formatData(modules, numColumns)}
        renderItem={({item}) => {
          if(item.id === 0) {
            return <View style={[styles.item, styles.hidden]} />
          }
          return(
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.value)} >
              <Text>{item.value}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    margin: 10,
    borderWidth: 1
  },
  hidden: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  }
})

export default ApplicationScreen;