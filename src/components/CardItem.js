import React from "react";
import { Text, View, StyleSheet } from "react-native";

function CardItem({itemName}) {
  return (
    <View style={styles.container}>
      <Text>{itemName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default CardItem;
