import React from 'react';
import { Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { Screen } from '../components';

// Add new module 
const modules = [
    {id: 1, value: 'Schedule'},
  ];

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

function ApplicationScreen({ navigation }) {
    return (
        <Screen>
            <FlatList
                data={modules}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(item.value)} >
                        <Text style={styles.item}>{item.value}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size
    },
    item: {
      flex: 1,
      margin: 40,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderWidth: 0.7,
    }
  });

export default ApplicationScreen;