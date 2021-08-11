import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SettingsRow } from "../components";
import { toggleMode } from "../redux/actions";

function PreferencesCard({ navigation }) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;
  const dispatch = useDispatch();

  const data = [
    { id: 1, value: "Permissions", icon: "user" },
    { id: 2, value: "Change Password", icon: "lock" },
    { id: 3, value: "Change Location", icon: "map-pin" },
  ];

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
      color: theme.textColor,
    },
    title: {
      color: theme.textColor,
      fontSize: 25,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      <SettingsRow
        onPress={() => dispatch(toggleMode())}
        state={state.isDarkMode}
      />
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({ item }) => (
          <SettingsRow
            item={item.value}
            isSwitch={false}
            onPress={() => navigation.navigate(item.value)}
            icon={item.icon}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default PreferencesCard;
