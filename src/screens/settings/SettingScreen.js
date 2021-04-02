import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import { Screen, SettingCard } from "../../components";

const data = [
  {id: 1, value: "Permissions"}
]

function SettingScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => 
          <SettingCard item={item} onPress={() => navigation.navigate(item.value)} />
        }
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  title: {
    fontSize: 28, 
    marginLeft: 10, 
    fontWeight: 'bold'
  }
})

export default SettingScreen;
