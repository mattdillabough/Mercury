import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SettingsRow } from "../components";
import { toggleMode } from "../redux/actions";

function NotifcationsCard({ navigation }) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;
  const dispatch = useDispatch();

  const data = [
    { id: 1, value: "Permissions" },
    { id: 2, value: "Change Password" },
    { id: 3, value: "Change Location" },
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
      <Text style={styles.title}>Notfications</Text>
      <SettingsRow item={"Push Notifications"} />
      <SettingsRow item={"SMS Notifications"} />
      <SettingsRow item={"Email Notifications"} />
    </View>
  );
}

export default NotifcationsCard;