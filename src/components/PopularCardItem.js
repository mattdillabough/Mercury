import React from "react";
import { Text, View, StyleSheet } from "react-native";

function PopularCardItem({itemName}) {
  return (
    <View style={styles.container}>
      <Text>{itemName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    
  },
});
export default PopularCardItem;