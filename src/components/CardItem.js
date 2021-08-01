import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function CardItem({ itemName }) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      margin: 10,
      borderRadius: 10,
      backgroundColor: theme.cardColor,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    text: {
      color: theme.textColor
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemName}</Text>
    </View>
  );
}

export default CardItem;
