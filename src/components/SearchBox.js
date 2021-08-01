import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const SearchBox = () => {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;

  const styles = StyleSheet.create({
    searchBox: {
      flexDirection: "row",
      width: "90%",
      padding: 15,
      backgroundColor: theme.cardColor,
      borderRadius: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    text: {
      fontSize: 20,
      marginLeft: 10,
      color: theme.textColor
    },
  });
  return (
    <View style={styles.searchBox}>
      <MaterialCommunityIcons
        name="card-search-outline"
        color={theme.textColor}
        size={30}
      />
      <Text style={styles.text}>Search</Text>
    </View>
  );
};



export default SearchBox;
