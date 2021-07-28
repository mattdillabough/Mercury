import React from "react";
import { Text, View, StyleSheet } from "react-native";

function PopularCardItem({itemName}) {
  return (
    <View style={styles.container}>
      <Text>{itemName}</Text>
      <Text>{itemName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "grey",
  },
});
export default PopularCardItem;