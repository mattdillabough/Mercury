import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <MaterialCommunityIcons
        name="card-search-outline"
        color="black"
        size={30}
      />
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    width: "90%",
    padding: 15,
    backgroundColor: "lightgrey",
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
  },
});

export default SearchBox;
